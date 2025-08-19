import { z } from "zod";
import DOMPurify from "dompurify";

// 1. XSS guard (basic check)
const noXss = (value: string) => !/<[^>]*>/g.test(value);

// 2. Shared contact form schema
export const contactSchema = z.object({
    name: z.string().min(3).refine(noXss, "Invalid characters in name"),
    email: z.string().email().refine(noXss, "Invalid characters in email"),
    subject: z.string().min(2).refine(noXss, "Invalid characters in subject"),
    message: z.string().min(10).refine(noXss, "Invalid characters in message"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// 3. Register Trusted Types policy for DOMPurify (once, client-side)
const domPurifyPolicy =
    typeof window !== "undefined" && window.trustedTypes
        ? window.trustedTypes.createPolicy!("dompurify", {
            createHTML: (dirty: string) =>
                DOMPurify.sanitize(dirty, { RETURN_TRUSTED_TYPE: true }) as any,
        })
        : null;

// 4. A helper that validates with Zod + returns TrustedHTML
export function validateAndTrustHTML<T extends string>(
    schema: z.ZodType<T, any, any>,
    input: string
): TrustedHTML | null {
    const result = schema.safeParse(input);
    if (!result.success) return null;

    // Sanitize + wrap in TrustedHTML
    return domPurifyPolicy
        ? domPurifyPolicy.createHTML(result.data)
        : (DOMPurify.sanitize(result.data) as any);
}
