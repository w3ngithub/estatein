import { z } from "zod";

export const letsConnectSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
  inquiryType: z.string().min(1, "Inquiry Type is required"),
  hearAboutUs: z.string().min(1, "This is required"),
  message: z.string().optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms & conditions" }),
  }),
});

export type LetsConnectSchema = z.infer<typeof letsConnectSchema>;
