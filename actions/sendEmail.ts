'use server';

import { Resend } from 'resend';
import { getErrorMessage, validateEmail } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

  if (!validateEmail(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateEmail(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form<onboarding@resend.dev>',
      to: 'ratishudawat@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};
