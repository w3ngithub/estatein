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
import discoverProperty from "@/utilityComponents/dashboardPage/discoverProperty.json";

interface EditPropertyModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  propertyId: string;
}

const EditPropertyModal = ({
  isModalOpen,
  setIsModalOpen,
  propertyId,
}: EditPropertyModalProps) => {
  const propertyToEdit =
    discoverProperty.find((property) => property.id === propertyId) ||
    discoverProperty[0];
  const [newFeature, setNewFeature] = useState(
    propertyToEdit.keyFeatures[0]?.name || ""
  );

  const form = useForm<PropertyListingSchema>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      villaName: propertyToEdit.villaName,
      keyFeatures: propertyToEdit.keyFeatures,
      description: propertyToEdit.description,
      price: propertyToEdit.price.toString(),
      pillName: propertyToEdit.pillName,
      location: propertyToEdit.location,
      buildYear: propertyToEdit.buildYear,
      totalBedRoom: propertyToEdit.totalBedRoom,
      totalBathRoom: propertyToEdit.totalBathRoom,
      totalArea: propertyToEdit.totalArea,
      areaUnit: propertyToEdit.areaUnit,
      propertyType: propertyToEdit.propertyType,
      propertyTransferTax: propertyToEdit.propertyTransferTax,
      legalFees: propertyToEdit.legalFees,
      homeInspectionFee: propertyToEdit.homeInspectionFee,
      propertyInsurance: propertyToEdit.propertyInsurance,
      mortgageFee: propertyToEdit.mortgageFee,
      propertyTax: propertyToEdit.propertyTax,
      additionalFee: propertyToEdit.additionalFee,
      homeOwnersAssociationFee: propertyToEdit.homeOwnersAssociationFee,
      downPayment: propertyToEdit.downPayment,
      monthlyPropertyInsurance: propertyToEdit.monthlyPropertyInsurance,
      coverImage: null, // We'll set this in useEffect
      multipleImages: [], // We'll set this in useEffect
    },
  });

  useEffect(() => {
    const fetchImages = async () => {
      // Fetch cover image
      if (propertyToEdit.coverImage) {
        try {
          const coverImageResponse = await fetch(propertyToEdit.coverImage);
          const coverImageBlob = await coverImageResponse.blob();
          const coverImageFile = new File([coverImageBlob], "coverImage", {
            type: coverImageBlob.type,
          });
          form.setValue("coverImage", coverImageFile);
        } catch (error) {
          console.error("Error fetching cover image:", error);
        }
      }

      // Fetch multiple images
      if (
        propertyToEdit.multipleImages &&
        propertyToEdit.multipleImages.length > 0
      ) {
        try {
          const multipleImageFiles = await Promise.all(
            propertyToEdit.multipleImages.map(async (imageUrl, index) => {
              const response = await fetch(imageUrl);
              const blob = await response.blob();
              return new File([blob], `image${index}`, { type: blob.type });
            })
          );
          form.setValue("multipleImages", multipleImageFiles);
        } catch (error) {
          console.error("Error fetching multiple images:", error);
        }
      }
    };

    fetchImages();
  }, [propertyToEdit, form]);

  async function onSubmit(values: PropertyListingSchema) {
    const formData = new FormData();

    // Append all form fields to formData
    Object.entries(values).forEach(([key, value]) => {
      if (key === "keyFeatures") {
        formData.append(key, JSON.stringify(value));
      } else if (key === "coverImage" && value instanceof File) {
        formData.append(key, value);
      } else if (key === "multipleImages" && Array.isArray(value)) {
        value.forEach((file, index) => {
          formData.append(`${key}[${index}]`, file);
        });
      } else {
        formData.append(key, value?.toString() || "");
      }
    });

    // Here you would typically send the formData to your API
    console.log("Form submitted:", Object.fromEntries(formData));

    formData.append("villaName", values.villaName);
    formData.append("price", values.price.toString());
    formData.append("pillName", values.pillName);
    formData.append("location", values.location);
    formData.append("buildYear", values.buildYear);

    formData.append("totalBedRoom", values.totalBedRoom.toString());
    formData.append("totalBathRoom", values.totalBathRoom.toString());
    formData.append("totalArea", values.totalArea.toString());
    formData.append("areaUnit", values.areaUnit.toString());
    formData.append("propertyType", values.propertyType.toString());

    formData.append(
      "propertyTransferTax",
      values.propertyTransferTax.toString()
    );
    formData.append("legalFees", values.legalFees.toString());
    formData.append("homeInspectionFee", values.homeInspectionFee.toString());
    formData.append("propertyInsurance", values.propertyInsurance.toString());
    formData.append("mortgageFee", values.mortgageFee.toString());
    formData.append("propertyTax", values.propertyTax.toString());
    formData.append("additionalFee", values.additionalFee.toString());
    formData.append(
      "homeOwnersAssociationFee",
      values.homeOwnersAssociationFee.toString()
    );
    formData.append("downPayment", values.downPayment.toString());
    formData.append(
      "monthlyPropertyInsurance",
      values.monthlyPropertyInsurance.toString()
    );
    formData.append("description", values.description);

    formData.append("keyFeatures", JSON.stringify(values.keyFeatures));

    formData.append("coverImage", values.coverImage);

    values.multipleImages.forEach((image) => {
      formData.append("multipleImages", image);
    });

    // Reset form after submission
    form.reset();
    form.resetField("buildYear");
    form.resetField("coverImage");
    form.resetField("multipleImages");
  }

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={false}>
        <DialogContent className="max-w-full w-full h-full max-h-full rounded-lg p-0 overflow-y-auto">
          <div className="p-8 space-y-10">
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <DialogHeader>
                    <DialogTitle className="text-2xl py-4">
                      Edit Property
                    </DialogTitle>
                    <DialogDescription> </DialogDescription>
                  </DialogHeader>
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
                                {field.value.map((feature, index) => (
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
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Image</FormLabel>
                            <FormControl>
                              <SingleImageUpload
                                form={form}
                                name="coverImage"
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="multipleImages"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Multiple Images</FormLabel>
                            <FormControl>
                              <MultipleImageUpload
                                form={form}
                                name="multipleImages"
                                onChange={field.onChange}
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditPropertyModal;
