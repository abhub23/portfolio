import { ShineBorder } from '@/components/magicui/shine-border';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import type { Cardprops } from '@/types/components/project-types';
import { ExternalLinkIcon } from '@/components/ui/svgs/ExternalLinkIcon';
import { GithubIcon } from '@/components/ui/svgs/GithubIcon';

function Card({ Title, Desc, SrcLink, WebLink, Skills, Imglink }: Cardprops) {
  return (
    <article className="relative flex w-[320px] flex-col items-center justify-between rounded-sm border border-zinc-300/80 bg-neutral-50 p-6 lg:w-[340px] dark:border-zinc-800 dark:bg-neutral-950">
      <ShineBorder
        className="rounded-sm"
        shineColor={[
          'oklch(55.6% 0 0)',
          'oklch(83.3% 0.145 321.434)',
          'oklch(81.1% 0.111 293.571)',
        ]}
      />
      <div className="group relative w-[290px]">
        <div className="flex items-center justify-start">
          <h3 className="mt-[4px] ml-[8px] transform text-[18px] leading-6 font-semibold text-black transition-all duration-500 ease-in-out hover:scale-105 hover:text-rose-600 lg:w-fit dark:text-white">
            <a href={WebLink} target="_blank">
              {Title}
            </a>
          </h3>
          <Image
            alt=""
            src={Imglink}
            width={45}
            height={45}
            className="absolute right-[10px] cursor-pointer"
            onClick={() => window.open(WebLink, '_blank')}
          />
        </div>

        <p className="mt-5 px-2 text-justify text-[11px] text-black lg:text-[13px] dark:text-white">
          {Desc}
        </p>
      </div>

      <div className="mt-6 flex w-[300px] flex-wrap gap-[4px] gap-y-[5px] px-3 lg:w-[330]">
        {Skills.map((el) => (
          <p
            key={el}
            className="ml-[2px] h-[18px] rounded-[3px] border border-neutral-300 p-[2px] px-[4px] text-[10px] text-black transition-all duration-300 ease-in-out lg:h-[20px] lg:text-[11px] dark:border-neutral-500 dark:text-white"
          >
            {el}
          </p>
        ))}
      </div>

      <div className="mt-4 lg:mr-2.5 flex w-full cursor-pointer justify-start gap-x-2">
        <Link href={WebLink} target="_blank">
          <Button size={'sm'}>
            <ExternalLinkIcon />
            Live
          </Button>
        </Link>

        <Link href={SrcLink} target="_blank">
          <Button size={'sm'}>
            <GithubIcon />
            Source
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default Card;
