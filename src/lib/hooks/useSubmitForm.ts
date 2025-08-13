import { sendContactEmail } from "../services/mailtrap.services";

export interface ContactFormValues {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

const useSubmitForm = () => {
    const onSubmit = async (values: ContactFormValues) => {
        try {
            await sendContactEmail(values, values.email);
            console.log("Form submitted successfully");
        } catch (error) {
            console.error("Contact form submission error:", error);
        }
    };

    return { onSubmit };
};

export { useSubmitForm };
