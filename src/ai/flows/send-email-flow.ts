'use server';

import { ai } from '@/ai/genkit';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

const transporter =
  SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT),
        secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })
    : null;

if (!transporter) {
  console.warn(
    'SMTP environment variables are not fully set. Email sending will not work. Please add SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS to your environment variables.'
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
    if (!transporter) {
      return {
        success: false,
        error: 'Email service is not configured on the server.',
      };
    }

    const { name, email, organization, message } = input;
    const fromEmail = `"${name}" <${SMTP_USER}>`;
    const toEmail = 'dev.thesemicolon@gmail.com'; 

    try {
      // Email to the agency
      await transporter.sendMail({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
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
      await transporter.sendMail({
        from: `"THE SEMICOLON" <${SMTP_USER}>`,
        to: email,
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
      console.error('Nodemailer Error:', error);
      return {
        success: false,
        error: 'Failed to send email. ' + (error.message || ''),
      };
    }
  }
);
