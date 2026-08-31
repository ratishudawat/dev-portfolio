export const links = [
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const skillGroups = [
  { label: 'Languages', items: 'JavaScript, TypeScript, Java, SQL' },
  { label: 'Frontend', items: 'React, Next.js, AG Grid, TanStack, Tailwind CSS' },
  { label: 'Backend', items: 'Node.js, Express, Java, Spring Boot, REST APIs' },
  { label: 'Data', items: 'MySQL, Redis, Elasticsearch, Kafka' },
  { label: 'Infrastructure', items: 'AWS, Docker, Kubernetes, Git' },
] as const;

export const experiencesData = [
  {
    title: 'Lead Software Engineer',
    company: 'Root Node India',
    date: 'Feb 2025 – Present',
    description:
      'Own the React and TypeScript architecture and shared component system that five engineers build features on. Ship Java and Spring Boot services, APIs and integrations across the same workflows. Mentor five SDEs, set code review standards, and drive architecture decisions across distributed teams. Also building PhonixFlow for Gigtforeningen.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Unify Technologies (Client: Harman International)',
    date: 'Jul 2022 – Aug 2024',
    description:
      'Built the in-house automotive log analysis tool on Harman’s developer tools team, sustaining 2,000 to 10,000 log traces per second with React, TypeScript, Node.js, AG Grid and TanStack. Recognised as Star Performer for Q1 2023.',
  },
  {
    title: 'Software Engineer',
    company: 'Altimetrik (Client: PayPal)',
    date: 'Oct 2020 – Sep 2021',
    description:
      'Migrated PayPal’s Activities component off a legacy stack to React, Node.js and Kubernetes. Delivered the GoPay integration for China data centers using Java.',
  },
  {
    title: 'Software Engineer',
    company: 'HolidayIQ',
    date: 'Aug 2018 – Aug 2020',
    description:
      'Built a lead-tracking platform from scratch on a five-person team with Node.js, Express, Kafka, Elasticsearch and Docker, owning schema, ingest, indexing and deployment.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Vaahika',
    date: 'Mar 2017 – Apr 2018',
    description:
      'Built client dashboards and REST APIs for the Android application using Node.js, MySQL and AWS.',
  },
  {
    title: 'B.Tech, Computer Science',
    company: 'Jaipur Engineering College and Research Center',
    date: '2013 – 2017',
    description: '',
  },
] as const;
