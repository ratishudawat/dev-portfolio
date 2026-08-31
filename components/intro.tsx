'use client';

import React from 'react';
import Image from 'next/image';
import img from '@/public/profile-picture.png';
import { BsLinkedin } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

const iconClass =
  'text-neutral-400 hover:text-accent transition-colors dark:text-neutral-500';

export default function Intro() {
  const { ref } = useSectionInView('About', 0.3);

  return (
    <section ref={ref} id='about' className='w-full scroll-mt-28 pb-12 pt-12'>
      <Image
        src={img}
        alt='Ratish Udawat'
        quality={95}
        width={160}
        height={160}
        priority
        className='h-24 w-24 rounded-full object-cover grayscale'
      />

      <h1 className='mt-6 text-3xl font-semibold tracking-tight'>Ratish Udawat</h1>

      <p className='mt-3 max-w-xl leading-relaxed text-neutral-600 dark:text-neutral-400'>
        Lead Software Engineer in Bengaluru, 8+ years across product and platform teams.
        React and TypeScript on the front, Java, Spring Boot and Node.js behind.
      </p>

      <dl className='mt-6 max-w-xl space-y-2 text-sm'>
        <div className='flex flex-col gap-1 sm:flex-row sm:gap-6'>
          <dt className='w-24 shrink-0 text-neutral-400 dark:text-neutral-500'>Currently</dt>
          <dd className='text-neutral-700 dark:text-neutral-300'>
            Bagstage, a baggage operations platform at Copenhagen Airport
          </dd>
        </div>
        <div className='flex flex-col gap-1 sm:flex-row sm:gap-6'>
          <dt className='w-24 shrink-0 text-neutral-400 dark:text-neutral-500'>Interests</dt>
          <dd className='text-neutral-700 dark:text-neutral-300'>
            Data-intensive interfaces, event-driven systems, developer tooling
          </dd>
        </div>
        <div className='flex flex-col gap-1 sm:flex-row sm:gap-6'>
          <dt className='w-24 shrink-0 text-neutral-400 dark:text-neutral-500'>Presence</dt>
          <dd className='flex items-center gap-4 text-lg'>
            <a href='https://github.com/ratishudawat' target='_blank' aria-label='GitHub' className={iconClass}>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/ratishudawat/' target='_blank' aria-label='LinkedIn' className={iconClass}>
              <BsLinkedin />
            </a>
            <a href='https://x.com/rudawat17' target='_blank' aria-label='X' className={iconClass}>
              <FaSquareXTwitter />
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
