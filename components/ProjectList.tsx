import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import { Project } from './Project';

export default function ProjectList() {
  return (
    <section id='projects' className='scroll-mt-28'>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, i) => (
        <React.Fragment key={i}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
