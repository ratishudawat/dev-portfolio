'use client';

import Intro from '@/components/intro';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className='mx-auto my-10 max-w-3xl rounded-lg border border-neutral-200 bg-white px-8 shadow-sm sm:px-12 dark:border-neutral-800 dark:bg-neutral-900'>
      <Intro />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
