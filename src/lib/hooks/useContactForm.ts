import { useSubmitForm } from '@/lib/hooks';
import { contactStore } from '@/store';
import { contactSchema } from '../validators';

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
                validation.error.issues.map(e => e.message).join('\n\n')
            );
            return;
        }

        contactStore.getState().setError("");
        onSubmit(values);
    };

    return { handleSubmit };
}
