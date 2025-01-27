"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, X } from "lucide-react";

const PropertiesContent = () => {
  //for image
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

  const [newFeature, setNewFeature] = useState(""); // Local state for input

  const formSchema = z.object({
    villaName: z.string().min(1, {
      message: "Villa Name is required",
    }),
    keyFeatures: z
      .array(z.string().min(1, "Feature cannot be empty"))
      .nonempty({
        message: "At least one key feature is required",
      }),

    description: z.string().min(1, {
      message: "Description is required",
    }),
    price: z.string().min(1, {
      message: "Price is required",
    }),
    pillName: z.string().min(1, {
      message: "Pill Name is required",
    }),
    coverImage: z
      //Rest of validations done via react dropzone
      .instanceof(File)
      .refine((file) => file.size !== 0, "Please upload an image"),

    location: z.string().min(1, {
      message: "Location is required",
    }),
    totalBedRoom: z
      .number({
        invalid_type_error: "Total Bedroom must be a number",
      })
      .min(1, {
        message: "Total Bedroom must be at least 1",
      })
      .max(100, {
        message: "Total Bedroom cannot exceed 100",
      }),
    totalBathRoom: z
      .number({
        invalid_type_error: "Total Bathroom must be a number",
      })
      .min(1, {
        message: "Total Bathroom must be at least 1",
      })
      .max(100, {
        message: "Total Bathroom cannot exceed 100",
      }),
    totalArea: z
      .number({
        invalid_type_error: "Total Area must be a number",
      })
      .min(1, {
        message: "Total Area is required",
      }),
    propertyTransferTax: z
      .number({
        invalid_type_error: "Property Transfer Tax must be a number",
      })
      .min(1, {
        message: "Property Transfer Tax is required",
      }),
    legalFees: z
      .number({
        invalid_type_error: "Legal Fee must be a number",
      })
      .min(1, {
        message: "Legal Fee is required",
      }),
    homeInspectionFee: z
      .number({
        invalid_type_error: "Home Inspection Fee must be a number",
      })
      .min(1, {
        message: "Home Inspection Fee is required",
      }),
    propertyInsurance: z
      .number({
        invalid_type_error: "Property Insurance must be a number",
      })
      .min(1, {
        message: "Property Insurance is required",
      }),
    mortgageFee: z.string().min(1, {
      message: "Mortgage Fee is required",
    }),
    propertyTax: z
      .number({
        invalid_type_error: "Property Tax must be a number",
      })
      .min(1, {
        message: "Property Tax is required",
      }),
    additionalFee: z
      .number({
        invalid_type_error: "Homeowner's Association Fee must be a number",
      })
      .min(1, {
        message: "Homeowner's Association Fee is required",
      }),
    homeOwnersAssociationFee: z
      .number({
        invalid_type_error: "Homeowner's Association Fee must be a number",
      })
      .min(1, {
        message: "Homeowner's Association Fee is required",
      }),
    downPayment: z
      .number({
        invalid_type_error: "Down Payment must be a number",
      })
      .min(1, {
        message: "Down Payment is required",
      }),
    monthlyPropertyInsurance: z
      .number({
        invalid_type_error: "Monthly Property Insurance must be a number",
      })
      .min(1, {
        message: "Monthly Property Insurance is required",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      villaName: "",
      keyFeatures: [],
      description: "",
      price: "",
      pillName: "",
      coverImage: new File([""], "filename"),
      location: "",
      totalBedRoom: 0,
      totalBathRoom: 0,
      totalArea: 0,
      propertyTransferTax: 0,
      legalFees: 0,
      homeInspectionFee: 0,
      propertyInsurance: 0,
      mortgageFee: "",
      propertyTax: 0,
      additionalFee: 0,
      homeOwnersAssociationFee: 0,
      downPayment: 0,
      monthlyPropertyInsurance: 0,
    },
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("coverImage", acceptedFiles[0]);
        form.clearErrors("coverImage");
      } catch (error) {
        setPreview(null);
        form.resetField("coverImage");
      }
    },
    [form]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(`Image uploaded successfully 🎉 ${values.coverImage.name}`);
    form.reset();
    setPreview(null);
    form.resetField("coverImage");
  }

  const handleRemoveImage = (e: any) => {
    e.stopPropagation();
    setPreview(null);
    form.resetField("coverImage");
  };

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-2xl">Properties</h1>
      {/* form */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            {/* image upload */}
            <FormField
              control={form.control}
              name="coverImage"
              render={() => (
                <FormItem className="mx-auto md:w-1/2">
                  <FormLabel
                    className={`${
                      fileRejections.length !== 0 && "text-destructive"
                    }`}
                  >
                    <h2 className="tracking-tight">
                      Upload Cover Image
                      <span
                        className={
                          form.formState.errors.coverImage ||
                          fileRejections.length !== 0
                            ? "text-destructive"
                            : "text-muted-foreground"
                        }
                      ></span>
                    </h2>
                  </FormLabel>
                  <FormControl>
                    <div
                      {...getRootProps()}
                      className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground"
                    >
                      {preview && (
                        <div className="relative">
                          <img
                            src={preview as string}
                            alt="Uploaded image"
                            className="max-h-[400px] rounded-lg"
                          />
                          {/* Cross Button */}
                          <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-white hover:bg-destructive-light"
                            aria-label="Remove image"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                      {!preview && <ImagePlus className="size-40" />}
                      <Input {...getInputProps()} type="file" />
                      {isDragActive ? (
                        <p>Drop the image!</p>
                      ) : (
                        <p>Click here or drag an image to upload it</p>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage>
                    {fileRejections.length !== 0 && (
                      <p>
                        Image must be less than 1MB and of type png, jpg, or
                        jpeg
                      </p>
                    )}
                  </FormMessage>
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
              name="totalBedRoom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Bedroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter total number of Bedroom"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Features</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter key features"
                      {...field}
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="keyFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Features</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {/* Input for adding a new feature */}
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
                            field.onChange([...field.value, newFeature]); // Add to array
                            setNewFeature(""); // Clear input
                          }
                        }}
                        className="px-4 py-2 text-white bg-blue-600 rounded-lg"
                      >
                        Add Feature
                      </button>

                      {/* List of added features */}
                      <ul className="space-y-1">
                        {field.value.map((feature: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
                          >
                            <span>{feature}</span>
                            <button
                              type="button"
                              onClick={() => {
                                field.onChange({
                                  ...field.value,
                                  features: field.value.filter(
                                    (_: string, i: number) => i !== index
                                  ),
                                });
                              }}
                              className="text-red-500"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      placeholder="Enter Mortgage Fee"
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
              name="propertyTax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Property Tax</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Property Tax"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                  <FormLabel>Enter Homeowner's Association Fee</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Homeowner's Association Fee"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                  <FormLabel>Enter Monthly Property Insurance</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Monthly Property Insurance"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      className="h-16 max-desktop-lg:h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex justify-end">
              <Button
                className=" bg-purple-shade-60 hover:bg-purple-shade-d60 text-white py-6 px-4"
                type="submit"
              >
                Add Property
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PropertiesContent;
