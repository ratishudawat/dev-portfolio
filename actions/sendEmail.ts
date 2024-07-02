'use server';

import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage, validateEmail } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

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

  let data;

  try {
    data = await resend.emails.send({
      from: 'Contact Form <work@ratishu.com>',
      to: 'work@ratishu.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
  return { data };
};
