import { html } from "@devwareng/vanilla-ts";
import { MailtrapClient } from "mailtrap";

export interface ContactFormValues {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

const TOKEN = process.env.MAILTRAP_TOKEN || "";
const RECIPIENT_EMAIL = "https://magic899.com";

const client = new MailtrapClient({ token: TOKEN });

export async function sendContactEmail(values: ContactFormValues, senderEmail: string) {
    const sender = { name: "Website Contact Form", email: senderEmail };

    try {
        const response = await client.send({
            from: sender,
            to: [{ email: RECIPIENT_EMAIL }],
            subject: values.subject || "New Contact Form Submission",
            text: html`
                Name: ${values.name}
                Email: ${values.email}
                Message: ${values.message}
      `.trim(),
        });

        return { success: true, response };
    } catch (error) {
        console.error("Mailtrap send error:", error);
        return { success: false, error };
    }
}
