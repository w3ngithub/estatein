import { z } from "zod";

export const propertySchema = z.object({
  villaName: z.string().min(1, {
    message: "Villa Name is required",
  }),

  coverImage: z
    //Rest of validations done via react dropzone
    .instanceof(File)
    .refine((file) => file.size !== 0, "Please upload One image only"),

  multipleImages: z
    .array(z.instanceof(File))
    .min(1, "Please upload at least one image")
    .refine(
      (files) => files.every((file) => file.size <= 1000000),
      "All images must be less than 1MB"
    ),

  keyFeatures: z
    .array(
      z.object({
        id: z.string(), // ID for the feature
        name: z.string().min(1, "Feature cannot be empty"), // Feature name
      })
    )
    .nonempty({
      message: "At least one key feature is required",
    }),

  description: z
    .string()
    .min(1, {
      message: "Description is required",
    })
    .refine((value) => value.trim().split(/\s+/).length >= 20, {
      message: "Description must be at least 20 words",
    }),
  price: z.string().min(1, {
    message: "Price is required",
  }),
  pillName: z.string().min(1, {
    message: "Pill Name is required",
  }),

  location: z.string().min(1, {
    message: "Location is required",
  }),
  buildYear: z.string().min(1, {
    message: "Build year is required",
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
  areaUnit: z.string().min(1, "Area Unit is required"),
  propertyType: z.string().min(1, "Property Type is required"),

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

export type PropertyListingSchema = z.infer<typeof propertySchema>;
