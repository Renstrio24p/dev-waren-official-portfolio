import z from "zod";

// Simple XSS detection: disallow < and > characters
const noXss = (value: string) => {
    // Reject if value contains any HTML tags
    const pattern = /<[^>]*>/g;
    return !pattern.test(value);
};

const contactSchema = z.object({
    name: z.string()
        .min(3, "Name must be at least 3 characters")
        .refine(noXss, "Hey! That's not a valid name!"),
    email: z.string()
        .email("Invalid email address")
        .refine(noXss, "Hey! That's not a valid email!"),
    subject: z.string()
        .min(2, "Subject is required")
        .refine(noXss, "Hey! That's not a valid subject!"),
    message: z.string()
        .min(10, "Message must be at least 10 characters")
        .refine(noXss, "Hey! That's not a valid message!"),
});

export { contactSchema };
