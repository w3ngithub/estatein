import z from "zod";

export const contactFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
