import Intro from '@/components/Intro';
import Image from 'next/image';
import SectionDivider from '@/components/SectionDivider';
import About from '@/components/About';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <div>
        <Image
          src={'/wuc.png'}
          alt={'Website under construction'}
          width={200}
          height={200}
        />
      </div>
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
