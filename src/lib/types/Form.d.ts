
export type ContactErrors = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
};

export type Contacts = {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export type ContactFormValues = {
    name: string;
    email: string;
    subject?: string;
    message: string;
}