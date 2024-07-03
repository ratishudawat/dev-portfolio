'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.9);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        Building awesome user experiences with a solid <span className='font-medium'>full-stack skillset</span>. I use{' '}
        <span className='font-medium'> Node.js, React, and AWS</span> to create and launch scalable, high-performance
        web apps. I'm always learning and love working with the latest tools like Docker, Kubernetes, and Kafka for
        smooth deployments. I thrive in team settings and enjoy being a strong collaborator.
      </p>
    </motion.section>
  );
}
