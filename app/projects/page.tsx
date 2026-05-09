'use client';

import Card from '@/components/project/Card';
import { Bricolage } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { projects } from '@/components/project/projects';
import { cn } from '@/lib/utils';
import { Animation, Transition } from '@/lib/animation';

function Projects() {
  const pathname = usePathname();


  return (
    <div className={cn('bg-neutral-50 dark:bg-neutral-950', pathname == '/projects' && 'h-screen')}>
      <motion.div
        {...Animation}
        transition={Transition(0)}
        className={cn(pathname == '/projects' ? 'mb-[30px]' : 'mb-[1px]')}
      >
        <p
          className={cn(
            'flex justify-center bg-neutral-50 p-2 text-[20px] font-semibold lg:mb-4 lg:text-[30px] dark:bg-neutral-950',
            pathname == '/projects' ? 'mt-[150px]' : 'mt-[80px]',
            Bricolage
          )}
        >
          Proof of work
        </p>
        <div className="flex w-full justify-center">
          <div className="mx-auto mb-8 grid justify-center gap-4 lg:grid-cols-2">
            {projects.map((val, idx) => (
              <Card
                key={idx}
                Title={val.title}
                Desc={val.desc}
                SrcLink={val.srcLink}
                WebLink={val.webLink}
                Skills={val.skills}
                Imglink={val.imgLink}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
