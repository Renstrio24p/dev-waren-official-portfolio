// hooks/useContactForm.ts
import { z } from 'zod';
import { useSubmitForm } from '@/lib/hooks';
import { contactStore } from '@/store';

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export function useContactForm() {
    const { onSubmit } = useSubmitForm();

    const handleSubmit = async (event: Event) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        // Only load in browser
        const { default: xss } = await import('xss');

        const values = {
            name: xss(formData.get('fullname')?.toString() || ''),
            email: xss(formData.get('email')?.toString() || ''),
            subject: xss(formData.get('subject')?.toString() || ''),
            message: xss(formData.get('message')?.toString() || ''),
        };

        const validation = contactSchema.safeParse(values);

        if (!validation.success) {
            contactStore.getState().setError(
                validation.error.issues.map(e => e.message).join('\n')
            );
            return;
        }

        contactStore.getState().setError("");
        onSubmit(values);
    };

    return { handleSubmit };
}
