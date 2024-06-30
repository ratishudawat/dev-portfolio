import { useActiveSection } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, setActiveSection, sectionName]);

  return { ref };
};
