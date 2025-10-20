'use server';

import { ai } from '@/ai/genkit';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

if (!resend) {
  console.warn(
    'RESEND_API_KEY is not set. Email sending will not work. Please add it to your environment variables.'
  );
}

const SendEmailInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  organization: z.string().optional(),
  message: z.string(),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

// Exported wrapper function to be called from the client
export async function sendEmail(input: SendEmailInput): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    if (!resend) {
      return {
        success: false,
        error: 'Email service is not configured on the server.',
      };
    }

    const { name, email, organization, message } = input;
    const fromEmail = 'onboarding@resend.dev'; // Resend requires a verified domain, using this for testing.
    const toEmail = 'dev.thesemicolon@gmail.com'; 

    try {
      // Email to the agency
      await resend.emails.send({
        from: `${name} <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New Message from ${name} (${organization || 'No Organization'})`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      // Confirmation email to the user
      await resend.emails.send({
        from: `THE SEMICOLON <${fromEmail}>`,
        to: [email],
        subject: 'Thank you for your message!',
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>The THE SEMICOLON Team</p>
        `,
      });

      return { success: true };
    } catch (error: any) {
      console.error('Resend API Error:', error);
      return {
        success: false,
        error: 'Failed to send email. ' + (error.message || ''),
      };
    }
  }
);
