"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { nanoid } from "nanoid";
import "react-dropzone-uploader/dist/styles.css";
import SingleImageUpload from "@/components/elements/SingleImageUpload";
import MultipleImageUpload from "@/components/elements/MultipleImageUpload";
import { type Dispatch, type SetStateAction, useState, useEffect } from "react";
import {
  type PropertyListingSchema,
  propertySchema,
} from "@/schema/property-listing-form";
import SelectField from "../common/SelectField";
import propertySizeType from "@/utilityComponents/dashboardPage/propertySizeTypeData.json";
import propertyType from "@/utilityComponents/dashboardPage/propertyTypeData.json";
import { YearCalendar } from "../common/YearCalender";
import Loading from "@/components/elements/Loading";
import { toast } from "sonner";
import { PropertyApiResponse } from "@/components/propertiesTable/types";

interface EditPropertyModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  propertyId: string;
  property: PropertyApiResponse[];
  setProperty: (property: PropertyApiResponse[]) => void;
}

const EditPropertyModal = ({
  isModalOpen,
  setIsModalOpen,
  propertyId,
  property,
  setProperty,
}: EditPropertyModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(""); //for coverImage
  const [multipleImgUrl, setMultipleImgUrl] = useState([]); //for multiple images

  const [newFeature, setNewFeature] = useState("");

  const form = useForm<PropertyListingSchema>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      villaName: "",
      keyFeatures: [],
      description: "",
      price: "",
      pillName: "",
      location: "",
      buildYear: "",
      totalBedRoom: 0,
      totalBathRoom: 0,
      totalArea: 0,
      areaUnit: "",
      propertyType: "",
      propertyTransferTax: 0,
      legalFees: 0,
      homeInspectionFee: 0,
      propertyInsurance: 0,
      mortgageFee: 0,
      propertyTax: 0,
      additionalFee: 0,
      homeOwnersAssociationFee: 0,
      downPayment: 0,
      monthlyPropertyInsurance: 0,
      coverImage: new File([""], "filename"),
      multipleImages: [],
    },
  });

  const urlToFile = async (url: string, filename: string): Promise<File> => {
    const correctedUrl = url.startsWith("/uploads/") ? `/estatein${url}` : url; // Ensure correct path

    try {
      const response = await fetch(correctedUrl);
      const blob = await response.blob();
      return new File([blob], filename, { type: blob.type });
    } catch (error) {
      console.error("Error converting URL to File:", error);
      return new File([""], filename);
    }
  };

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/estatein/api/addProperty/${propertyId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch property details");
        }
        const data = await response.json();

        // Populate form fields with fetched data
        Object.keys(data).forEach((key) => {
          if (key === "coverImage") {
            setImageUrl(data[key]); // Just set the imageUrl state
          } else if (key !== "multipleImages") {
            form.setValue(key as keyof PropertyListingSchema, data[key]);
          }
        });

        if (data.coverImage) {
          setImageUrl(data.coverImage); // Set image URL for preview
          const coverImageFile = await urlToFile(
            data.coverImage,
            "cover-image"
          );
          form.setValue("coverImage", coverImageFile);
        }

        if (data.multipleImages && data.multipleImages.length > 0) {
          setMultipleImgUrl(data.multipleImages); // Store all image URLs
          const multipleImageFiles = await Promise.all(
            data.multipleImages.map((url: string, index: number) =>
              urlToFile(url, `image-${index}`)
            )
          );
          form.setValue("multipleImages", multipleImageFiles);
        }

        // Set key features
        if (data.keyFeatures) {
          form.setValue("keyFeatures", data.keyFeatures);
          setNewFeature(""); // Reset new feature input
        }
      } catch (error) {
        console.error("Error fetching property data:", error);
        toast.error("Error fetching property data");
      } finally {
        setIsLoading(false);
      }
    };

    if (propertyId && isModalOpen) {
      fetchPropertyData();
    }
  }, [propertyId, isModalOpen, form]);

  async function onSubmit(values: PropertyListingSchema) {
    console.log(values, "Submitting...");
    setIsLoading(true);

    try {
      const formData = new FormData();

      // Append non-file fields
      Object.entries(values).forEach(([key, value]) => {
        if (key === "keyFeatures") {
          formData.append(key, JSON.stringify(value));
        } else if (key !== "coverImage" && key !== "multipleImages") {
          formData.append(key, value?.toString() || "");
        }
      });

      // let coverImageUrl = values.coverImage; // Default to existing URL
      let newCoverImageUrl = imageUrl; // Use the existing imageUrl as default
      let newMultipleImageUrl = multipleImgUrl;

      if (values.coverImage instanceof File) {
        formData.append("coverImage", values.coverImage);
      }

      if (Array.isArray(values.multipleImages)) {
        values.multipleImages.forEach((image) => {
          if (image instanceof File) {
            formData.append("multipleImages", image);
          }
        });
      }

      // Upload images only if new files are present
      if (
        values.coverImage instanceof File ||
        values.multipleImages.some((img) => img instanceof File)
      ) {
        const imageUploadResponse = await fetch(
          "/estatein/api/addProperty/upload-images",
          {
            method: "PUT",
            body: formData,
          }
        );

        if (!imageUploadResponse.ok) {
          throw new Error("Failed to upload images");
        }

        // multipleImageUrls
        const { coverImageUrl, multipleImageUrls } =
          await imageUploadResponse.json();

        if (multipleImageUrls) {
          newMultipleImageUrl = multipleImageUrls;
        }

        if (coverImageUrl) {
          newCoverImageUrl = coverImageUrl;
        }
      }

      // Prepare update data
      const updateData = {
        ...values,
        coverImage: newCoverImageUrl, //  Ensure URL format
        multipleImages: newMultipleImageUrl || values.multipleImages, // Ensure existing images remain

        // multipleImages: values.multipleImages.map((img) =>
        //   img instanceof File
        //     ? multipleImgUrl?.[values.multipleImages.indexOf(img)]
        //     : img
        // ),
      };

      // Send update request
      const response = await fetch(`/estatein/api/addProperty/${propertyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Failed to update property");
      }
      // Update local state immediately
      //@ts-ignore
      setProperty((prevProperties) =>
        prevProperties.map((item: PropertyApiResponse) =>
          item.id === propertyId
            ? {
                ...item,
                ...updateData,
                coverImage: newCoverImageUrl,
                multipleImages: newMultipleImageUrl || item.multipleImages,
                keyFeatures: values.keyFeatures,
                villaName: values.villaName,
                description: values.description,
                price: values.price,
                pillName: values.pillName,
                location: values.location,
                buildYear: values.buildYear,
                totalBedRoom: values.totalBedRoom,
                totalBathRoom: values.totalBathRoom,
                totalArea: values.totalArea,
                areaUnit: values.areaUnit,
                propertyType: values.propertyType,
                propertyTransferTax: values.propertyTransferTax,
                legalFees: values.legalFees,
                homeInspectionFee: values.homeInspectionFee,
                propertyInsurance: values.propertyInsurance,
                mortgageFee: values.mortgageFee,
                propertyTax: values.propertyTax,
                additionalFee: values.additionalFee,
                homeOwnersAssociationFee: values.homeOwnersAssociationFee,
                downPayment: values.downPayment,
                monthlyPropertyInsurance: values.monthlyPropertyInsurance,
              }
            : item
        )
      );

      // Update local state
      setImageUrl(newCoverImageUrl);
      setMultipleImgUrl(newMultipleImageUrl);
      toast.success("Property updated successfully");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating property:", error);
      toast.error("Error updating property");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={false}>
      <DialogContent className="max-w-full w-full h-full max-h-full rounded-lg p-0 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl py-4">Edit Property</DialogTitle>
          <DialogDescription> </DialogDescription>
        </DialogHeader>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="p-8 space-y-10">
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                  aria-label="Edit property form"
                >
                  <div className="grid mobile-lg:grid-cols-2 gap-10">
                    <FormField
                      control={form.control}
                      name="villaName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Villa Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Villa Name"
                              {...field}
                              value={field.value ?? ""}
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Price"
                              className="h-16 max-desktop-lg:h-14"
                              type="number"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="pillName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pill Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Pill Name"
                              className="h-16 max-desktop-lg:h-14"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Location"
                              {...field}
                              value={field.value ?? ""}
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="buildYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Build Year</FormLabel>
                          <FormControl>
                            <YearCalendar
                              value={field.value || ""}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="totalBedRoom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Bedroom</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter total number of Bedroom"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="totalBathRoom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Bathroom</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter total number of Bathroom"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="totalArea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Area</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter total number of area"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="areaUnit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Area Unit</FormLabel>
                          <FormControl>
                            <SelectField
                              placeholder="Select Area Unit"
                              data={propertySizeType}
                              value={field.value || ""}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Property Type</FormLabel>
                          <FormControl>
                            <SelectField
                              placeholder="Select Property Type"
                              data={propertyType}
                              value={field.value || ""}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="propertyTransferTax"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Property Transfer Tax</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter total number of area"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="legalFees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Legal Fee</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Legal Fee"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="homeInspectionFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Home Inspection Fee</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Home Inspection Fee"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="propertyInsurance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Property Insurance</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Property Insurance Fee"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mortgageFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Mortgage Fee</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Mortgage Fee"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="propertyTax"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Property Tax</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Property Tax"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="homeOwnersAssociationFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Enter Homeowner&apos;s Association Fee
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Homeowner's Association Fee"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="additionalFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Additional Fee</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Additional Fee"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="downPayment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter Down Payment</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Down Payment"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="monthlyPropertyInsurance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Enter Monthly Property Insurance
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter Monthly Property Insurance"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="h-16 max-desktop-lg:h-14"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 space-y-3">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              value={field.value ?? ""}
                              placeholder="Enter Description"
                              className="h-44 max-desktop-lg:h-28 max-mobile-xl:h-20 border border-grey-15"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="keyFeatures"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Key Features</FormLabel>
                          <FormControl>
                            <div className="space-y-2">
                              <Input
                                placeholder="Enter a key feature"
                                value={newFeature}
                                onChange={(e) => setNewFeature(e.target.value)}
                                className="h-16 max-desktop-lg:h-14"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  if (newFeature.trim()) {
                                    field.onChange([
                                      ...field.value,
                                      { id: nanoid(), name: newFeature },
                                    ]);
                                    setNewFeature(""); // Clear input
                                  }
                                }}
                                className="px-4 py-2 text-white bg-blue-600 rounded-lg"
                              >
                                Add Feature
                              </button>

                              {/* List of added features */}
                              <ul className="space-y-1">
                                {field?.value?.map((feature, index) => (
                                  <li
                                    key={feature.id}
                                    className="flex items-center justify-between p-2 bg-gray-100 dark:bg-grey-shade-40 rounded-lg"
                                  >
                                    <span>{feature.name}</span>
                                    <Button
                                      variant="destructive"
                                      onClick={() => {
                                        const updatedFeatures =
                                          field.value.filter(
                                            (_, i) => i !== index
                                          );
                                        field.onChange(updatedFeatures);
                                      }}
                                      className="text-white"
                                    >
                                      Remove
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full space-y-10">
                      <FormField
                        control={form.control}
                        name="coverImage"
                        render={() => (
                          <FormItem>
                            <FormLabel>Cover Image</FormLabel>
                            <FormControl>
                              <SingleImageUpload
                                form={form}
                                name="coverImage"
                                // onChange={field.onChange}
                                imageUrl={imageUrl}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="multipleImages"
                        render={() => (
                          <FormItem>
                            <FormLabel>Multiple Images</FormLabel>
                            <FormControl>
                              <MultipleImageUpload
                                form={form}
                                name="multipleImages"
                                multipleImgUrl={multipleImgUrl}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="w-full flex justify-end">
                      <Button
                        className=" bg-purple-shade-60 hover:bg-purple-shade-d60 text-white py-6 px-4"
                        type="submit"
                      >
                        Edit Property
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditPropertyModal;
