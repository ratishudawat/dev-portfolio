'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.3);

  return (
    <section ref={ref} id='experience' className='w-full scroll-mt-28 border-t border-neutral-200 py-12 dark:border-neutral-800'>
      <SectionHeading>Experience</SectionHeading>
      <ol className='max-w-2xl space-y-10'>
        {experiencesData.map((item) => (
          <li key={item.title + item.company} className='flex flex-col gap-1 sm:flex-row sm:gap-6'>
            <div className='w-36 shrink-0 pt-1 text-sm text-neutral-400 dark:text-neutral-500'>{item.date}</div>
            <div>
              <h3 className='font-medium text-neutral-900 dark:text-neutral-100'>{item.title}</h3>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>{item.company}</p>
              {item.description && (
                <p className='mt-2 leading-relaxed text-neutral-700 dark:text-neutral-300'>{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
