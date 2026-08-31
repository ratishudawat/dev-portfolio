'use client';

import React from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSection } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <header className='fixed inset-x-0 top-0 z-[999] border-b border-neutral-200 bg-neutral-50/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80'>
      <div className='mx-auto flex h-14 max-w-3xl items-center justify-between px-6'>
        <Link
          href='#about'
          className='text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-100'
          onClick={() => {
            setActiveSection('About');
            setTimeOfLastClick(Date.now());
          }}
        >
          Ratish Udawat
        </Link>
        <nav>
          <ul className='flex items-center gap-6 text-sm'>
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  className={clsx('transition-colors hover:text-accent', {
                    'text-accent': activeSection === link.name,
                    'text-neutral-400 dark:text-neutral-500': activeSection !== link.name,
                  })}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
