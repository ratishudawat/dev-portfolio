'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillGroups } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section ref={ref} id='skills' className='w-full scroll-mt-28 border-t border-neutral-200 py-12 dark:border-neutral-800'>
      <SectionHeading>Skills</SectionHeading>
      <dl className='max-w-2xl space-y-3'>
        {skillGroups.map((group) => (
          <div key={group.label} className='flex flex-col gap-1 sm:flex-row sm:gap-6'>
            <dt className='w-36 shrink-0 text-sm text-neutral-400 dark:text-neutral-500'>{group.label}</dt>
            <dd className='text-neutral-700 dark:text-neutral-300'>{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
