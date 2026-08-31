'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

const fieldClass =
  'w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none dark:border-neutral-700 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:focus:border-neutral-500';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <section
      ref={ref}
      id='contact'
      className='w-full scroll-mt-28 border-t border-neutral-200 py-12 dark:border-neutral-800'
    >
      <SectionHeading>Contact</SectionHeading>

      <div className='max-w-xl'>
        <p className='leading-relaxed text-neutral-700 dark:text-neutral-300'>
          Reach me at{' '}
          <a
            className='text-accent underline underline-offset-4'
            href='mailto:ratishudawat@gmail.com'
          >
            ratishudawat@gmail.com
          </a>
          , or send a note here.
        </p>

        <form
          className='mt-8 flex flex-col gap-3'
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success('Message sent.');
          }}
        >
          <input className={fieldClass} name='senderEmail' type='email' placeholder='Your email' required maxLength={500} />
          <textarea className={`${fieldClass} h-40 resize-none`} name='message' placeholder='Your message' required maxLength={5000} />
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
}
