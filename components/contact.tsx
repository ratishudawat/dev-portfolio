'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className='text-gray-700 -mt-6'>Let's connect!</p>
      <p className='text-gray-700'>
        Drop me a line at{' '}
        <a className={'underline'} href='mailto:work@ratishu.com'>
          work@ratishu.com
        </a>{' '}
        or use the form below to reach out.
      </p>

      <form className='mt-10 flex flex-col' action={async (formData) => await sendEmail(formData)}>
        <input
          className='h-14 px-4 rounded-lg borderBlack'
          name='senderEmail'
          type='email'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4'
          name='message'
          id=''
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <button
          className='group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
          type='submit'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
        </button>
      </form>
    </motion.section>
  );
}
