import { useSubmitForm } from '@/lib/hooks';
import { contactStore } from '@/store';
import { contactSchema } from '../../validators';
import { ContactErrors, ContactHookFunction, Contacts, HandlerSubmit } from '@/lib/types';

const useContactForm: ContactHookFunction = (DOM) => {
    const { onSubmit } = useSubmitForm();
    let errors = contactStore.getState().errors;


    const handleSubmit: HandlerSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const { default: xss } = await import('xss');

        const values = {
            name: xss(formData.get('fullname')?.toString() || ''),
            email: xss(formData.get('email')?.toString() || ''),
            subject: xss(formData.get('subject')?.toString() || ''),
            message: xss(formData.get('message')?.toString() || ''),
        };

        const validation = contactSchema.safeParse(values);

        if (!validation.success) {
            const fieldErrors: ContactErrors = {};
            validation.error.issues.forEach(issue => {
                const field = issue.path[0] as keyof ContactErrors;
                fieldErrors[field] = issue.message;
            });

            contactStore.getState().setError(fieldErrors as Contacts);
            return;
        } else {

        }

        // clear errors if valid
        contactStore.getState().setError({
            name: '',
            email: '',
            subject: '',
            message: '',
        } as Contacts);
        onSubmit(values);
        form.reset();
    };

    const requestAnimation = () => {
        requestAnimationFrame(() => {
            contactStore.subscribe((state) => {
                errors = state.errors;

                Object.keys(errors).forEach((field) => {
                    const el = DOM.querySelector(`[data-error-field="${field}"]`) as HTMLElement | null;
                    if (el) {
                        el.textContent = errors![field as keyof typeof errors] || '';
                    }
                });
            });
        });
    }

    return { errors, handleSubmit, requestAnimation };
}

export { useContactForm }