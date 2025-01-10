import { z } from "zod";

export const inquiryFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  selectedProperty: z
    .string({ required_error: "Please select a location" })
    .min(1, "Please select a location"),
  message: z.string().min(1, "Message is required"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms & conditions" }),
  }),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;
