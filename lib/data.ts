import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { FaNodeJs } from 'react-icons/fa';
import { SiSailsdotjs } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

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
  // {
  //   name: 'Projects',
  //   hash: '#projects',
  // },
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
  'JavaScript',
  'TypeScript',
  'Java',
  'React',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'Electron',
  'MySQL',
  'Redis',
  'Elasticsearch',
  'AWS',
  'Docker',
  'Kafka',
  'Jest',
  'Git',
] as const;

export const experiencesData = [
  {
    title: 'B.Tech, Computer Science',
    company: 'Jaipur Engineering College and Research Center',
    description:
      "In my bachelor's journey, I delved into Object Oriented Programming, mastered Databases, navigated Data Structures and Algorithms, explored Operating Systems, and connected through Computer Networks.",
    icon: React.createElement(LuGraduationCap),
    date: '2013 - 2017',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Vaahika',
    description:
      'I kicked off my career by building an admin dashboard and client-facing site with Node.js, Handlebars, MySQL, and AWS. I also got my hands dirty designing APIs for the Android app — a great first taste of full-stack ownership.',
    icon: React.createElement(SiSailsdotjs),
    date: 'Mar 2017 - Apr 2018',
  },
  {
    title: 'Software Engineer',
    company: 'HolidayIQ',
    description:
      'Here I built a lead tracking engine from the ground up with Express, Docker, Kafka, and Elasticsearch. I also created a dynamic chat form with React and Node.js that gave a real boost to daily leads.',
    icon: React.createElement(FaReact),
    date: 'Aug 2018 - Aug 2020',
  },
  {
    title: 'Software Engineer',
    company: 'Altimetrik',
    description:
      'I worked on migrating PayPal\'s Activities component to a modern React and Node stack running on Kubernetes. I also helped drive the GoPay-PayPal integration for China data centers using Java.',
    icon: React.createElement(FaNodeJs),
    date: 'Oct 2020 - Sep 2021',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Unify Technologies',
    description:
      'I designed high-performance UIs with React, TypeScript, and Node.js — handling 2,000 to 10,000 automotive log traces per second. This role earned me the "Star Performer for Q1-2023" recognition.',
    icon: React.createElement(FaReact),
    date: 'Jul 2022 - Aug 2024',
  },
  {
    title: 'Lead Software Engineer',
    company: 'Root Node India',
    description:
      'Currently leading frontend development for Bagstage, a baggage operations platform for Copenhagen Airport, and contributing to backend services with Java Spring Boot. I also work on PhonixFlow, where I leverage AI-assisted tools to ship features faster.',
    icon: React.createElement(FaCode),
    date: 'Feb 2025 - Present',
  },
] as const;
