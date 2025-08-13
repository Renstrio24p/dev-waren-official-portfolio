import z from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(2, "Subject is required"), // now required
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export { contactSchema };
