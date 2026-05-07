'use client';

import React from 'react';
import { Link, Separator, Tooltip } from '@radix-ui/themes';
import {
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  FileIcon,
  LinkedInLogoIcon,
  CodeIcon,
  HomeIcon,
} from '@radix-ui/react-icons';
import { GitPullRequestArrow } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { useDarkmode } from '@/store/useDarkmode';
import { cn } from '@/lib/utils';

function Navbar() {
  const { isDarkmode, toggleDarkmode } = useDarkmode();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 flex w-full justify-center py-6">
      <div className="dark:bg-oklch(14.1% 0.005 285.823)/10 bg-opacity-10 border-1/70 flex w-[800px] items-center justify-center rounded-full bg-white/10 px-2 py-1 shadow-xl ring ring-zinc-100 backdrop-blur-lg transition-colors duration-300 max-[450px]:w-[400px] max-[400px]:w-[345px] max-[350px]:w-[330px] max-[321px]:w-[310px] lg:h-[54px] lg:w-[800px] dark:border-white/20 dark:shadow-none dark:ring-transparent">
        <div className="flex items-center justify-center gap-8 px-2 transition-all max-[450px]:gap-5 max-[400px]:gap-4 max-sm:gap-4">
          <Link href="/" underline="none">
            <Tooltip content="Home">
              <div className="mt-1 rounded-full py-2.5 transition-all duration-300 hover:bg-[#F4F4F5] hover:px-3 max-sm:hover:px-2 dark:hover:bg-[#262626]">
                <HomeIcon
                  className={cn(
                    'size-[18px] text-black lg:size-[22px] dark:text-white',
                    pathname == '/' && 'text-yellow-400 dark:text-yellow-400'
                  )}
                />
              </div>
            </Tooltip>
          </Link>

          <Link href="/projects">
            <Tooltip content="Projects">
              <div className="rounded-full py-2.5 transition-all duration-300 hover:bg-[#F4F4F5] hover:px-3 max-sm:hover:px-2 dark:hover:bg-[#262626]">
                <CodeIcon
                  className={cn(
                    'size-[18px] text-black lg:size-[22px] dark:text-white',
                    pathname == '/projects' && 'text-yellow-400 dark:text-yellow-400'
                  )}
                />
              </div>
            </Tooltip>
          </Link>

          <Link href="/opensource">
            <Tooltip content="Open source">
              <div className="rounded-full py-2.5 transition-all duration-300 hover:bg-[#F4F4F5] hover:px-3 max-sm:hover:px-2 dark:hover:bg-[#262626]">
                <GitPullRequestArrow
                  className={cn(
                    'size-[16px] text-black lg:size-[20px] dark:text-white',
                    pathname.startsWith('/opensource') && 'text-yellow-400 dark:text-yellow-400'
                  )}
                />
              </div>
            </Tooltip>
          </Link>

          <span className="h-full bg-black dark:bg-gray-400">
            <Separator
              orientation="vertical"
              size={{ sm: '1', lg: '2', xl: '2' }}
              className="bg-black dark:bg-gray-400"
            />
          </span>

          <Link
            href="https://drive.google.com/file/d/1JMsQveOQ3ir0tZxdcCXKVOcNYsx6_l6u/view"
            target="_blank"
            underline="none"
          >
            <Tooltip content="Resume">
              <div className="rounded-full py-2.5 transition-all duration-300 hover:bg-[#F4F4F5] hover:px-3 max-sm:hover:px-2 dark:hover:bg-[#262626]">
                <FileIcon className="size-[18px] text-black lg:size-[22px] dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <Link href="https://github.com/abhub23" target="_blank">
            <Tooltip content="Github">
              <div className="rounded-full py-2.5 transition-all duration-300 hover:bg-[#F4F4F5] hover:px-3 max-sm:hover:px-2 dark:hover:bg-[#262626]">
                <GitHubLogoIcon className="size-[18px] w-[19px] text-black lg:size-[22px] dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <Link href="https://x.com/abdullah_twt23" target="_blank">
            <Tooltip content="X">
              <div className="rounded-full py-2.5 transition-all duration-300 hover:bg-[#F4F4F5] hover:px-3 max-sm:hover:px-2 dark:hover:bg-[#262626]">
                <FaXTwitter className="size-[18px] text-black lg:size-[20px] dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <Link href="https://www.linkedin.com/in/abdullah-mukri-84a56b220/" target="_blank">
            <Tooltip content="Linkedin">
              <div className="rounded-full py-2.5 transition-all duration-300 hover:bg-[#F4F4F5] hover:px-3 max-sm:hover:px-2 dark:hover:bg-[#262626]">
                <LinkedInLogoIcon className="size-[18px] text-black lg:size-[20px] dark:text-white" />
              </div>
            </Tooltip>
          </Link>

          <span className="h-full bg-black dark:bg-gray-400">
            <Separator
              orientation="vertical"
              size={{ sm: '1', lg: '2', xl: '2' }}
              className="bg-black dark:bg-gray-400"
            />
          </span>

          <div
            className="rounded-full py-2.5 transition-all duration-300 hover:px-3 max-sm:hover:px-2"
            onClick={toggleDarkmode}
          >
            <div className="flex items-center">
              <button>
                {isDarkmode == 'dark' ? (
                  <MoonIcon className="size-[16px] cursor-pointer text-white lg:size-[20px]" />
                ) : (
                  <SunIcon className="size-[16px] cursor-pointer lg:size-[20px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
