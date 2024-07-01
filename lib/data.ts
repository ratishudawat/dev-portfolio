import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { FaNodeJs } from 'react-icons/fa';
import { SiSailsdotjs } from 'react-icons/si';

import project1 from '@/public/project1.png';
import project2 from '@/public/project2.png';
import project3 from '@/public/project3.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Project',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: project1,
  },
  {
    title: 'Project',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.,',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: project2,
  },
  {
    title: 'Project',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.,',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer Motion'],
    imageUrl: project3,
  },
] as const;

export const skillsData = [
  'Node.js',
  'Express',
  'React',
  'Python',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Git',
  'Tailwind',
  'PostgreSQL',
  'MySQL',
  'Redux',
  'AWS',
  'EC2',
  'Docker',
  'Kafka',
  'Elasticsearch',
  'Java',
  'Framer Motion',
] as const;

export const experiencesData = [
  {
    title: 'B.Tech, Computer Science',
    company: 'Rajasthan Technical University',
    description:
      "In my bachelor's journey, I delved into Object Oriented Programming, mastered Databases, navigated Data Structures and Algorithms, explored Operating Systems, and connected through Computer Networks.",
    icon: React.createElement(LuGraduationCap),
    date: '2013 - 2017',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Vaahika',
    description:
      'I began my career building an admin dashboard and client-facing website using Sails.js, Handlebars, React, Express, Material UI, and MySQL. I also developed robust RESTful APIs for an Android app.',
    icon: React.createElement(SiSailsdotjs),
    date: '2017 - 2018',
  },
  {
    title: 'Software Engineer',
    company: 'HolidayIQ',
    description:
      'Later, I created a dynamic chat form framework and a custom tracking engine using Node.js, React, Laravel, MySQL, Docker, Kafka, and Elasticsearch.',
    icon: React.createElement(FaReact),
    date: '2018 - 2020',
  },
  {
    title: 'Engineer - Product and Platform',
    company: 'Altimetrik',
    description:
      'I then migrated a legacy application to a modern stack with React and Node, Java, Docker, and Kubernetes.',
    icon: React.createElement(FaNodeJs),
    date: '2020 - 2021',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Unify Technologies',
    description:
      'Currently, I design high-performance UIs and integrate a DLT parser into real-time hardware logging system using React, Node, Typescript, Qt, Electron, Eclipse Theia, and Tailwind.',
    icon: React.createElement(FaReact),
    date: '2022 - Present',
  },
] as const;
