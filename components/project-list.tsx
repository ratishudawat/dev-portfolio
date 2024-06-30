import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import { Project } from './project';
import { useSectionInView } from '@/lib/hooks';

export default function ProjectList() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, i) => (
        <React.Fragment key={i}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
