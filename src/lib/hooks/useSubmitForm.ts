export interface ContactFormValues {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

const useSubmitForm = () => {
    const onSubmit = (values: ContactFormValues) => {
        console.log("Submitting form:", values);

        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(values),
        // });
    };

    return { onSubmit };
};

export { useSubmitForm };
