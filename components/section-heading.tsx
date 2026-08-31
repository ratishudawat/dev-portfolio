import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='mb-8 text-xs font-medium uppercase tracking-[0.15em] text-accent'>
      {children}
    </h2>
  );
}
