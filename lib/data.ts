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
    name: 'Projects',
    hash: '#projects',
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
