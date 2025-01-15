import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
  preferredLocation: z.string().min(1, "Preferred Location is required"),
  propertyType: z.string().min(1, "Property Type is required"),
  noOfBathrooms: z.string().min(1, "Number of Bathrooms is required"),
  noOfBedrooms: z.string().min(1, "Number of Bedrooms is required"),
  budget: z.string().min(1, "Budget is required"),
  preferredContactMethod: z.enum(["number", "email"]),
  message: z.string().optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms & conditions" }),
  }),
});

export type FormSchema = z.infer<typeof formSchema>;
