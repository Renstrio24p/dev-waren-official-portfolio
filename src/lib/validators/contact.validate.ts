import z from "zod";
import xss from "xss";

const noXss = (value: string) => {
    // sanitize the input
    const sanitized = xss(value);
    // if sanitized is different, it contained potential XSS
    if (sanitized !== value) {
        return false;
    }
    return true;
};

const contactSchema = z.object({
    name: z.string()
        .min(3, "Name must be at least 3 characters")
        .refine(noXss, "Hey! That's not a valid name!"),
    email: z.email("Invalid email address")
        .refine(noXss, "Hey! That's not a valid email!"),
    subject: z.string()
        .min(2, "Subject is required")
        .refine(noXss, "Hey! That's not a valid subject!"),
    message: z.string()
        .min(10, "Message must be at least 10 characters")
        .refine(noXss, "Hey! That's not a valid message!"),
});

export { contactSchema };
