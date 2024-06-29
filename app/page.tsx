'use client';

import Intro from '@/components/Intro';
import SectionDivider from '@/components/SectionDivider';
import About from '@/components/About';
import Projects from '@/components/ProjectList';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='mt-8'
      ></motion.div>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  );
}
