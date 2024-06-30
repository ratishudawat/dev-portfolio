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
        Crafting exceptional user experiences with a comprehensive <span className='font-medium'> full-stack</span>{' '}
        skillset. Leveraging the power of <span className='font-medium'>Node.js, React, and AWS</span> to architect,
        build, and deploy scalable and performant web applications. A
        <span className='italic'>
          continuous learner, adept in utilizing cutting-edge tools like{' '}
          <span className='underline'>Docker, Kubernetes, and Kafka</span> for robust deployments
        </span>
        . Thrives in collaborative environments as a strong team player.
      </p>
    </motion.section>
  );
}
