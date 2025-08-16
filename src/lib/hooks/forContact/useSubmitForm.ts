
export interface ContactFormValues {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

const useSubmitForm = () => {
    const onSubmit = async (_values: ContactFormValues) => {
        try {
            console.log("Form submitted successfully");
        } catch (error) {
            console.error("Contact form submission error:", error);
        }
    };

    return { onSubmit };
};

export { useSubmitForm };
