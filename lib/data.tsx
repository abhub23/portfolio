import { ReactLight } from '@/components/ui/svgs/reactLight';
import { NextjsIconDark } from '@/components/ui/svgs/nextjsIconDark';
import { Typescript } from '@/components/ui/svgs/typescript';
import { Nodejs } from '@/components/ui/svgs/nodejs';
import { Python } from '@/components/ui/svgs/python';
import { Postgresql } from '@/components/ui/svgs/postgresql';
import { Docker } from '@/components/ui/svgs/Docker';
import ExpressJs from '@/components/ui/svgs/ExpressJs';
import { Drizzle } from '@/components/ui/svgs/Drizzle';
import Git from '@/components/ui/svgs/Git';
import Github from '@/components/ui/svgs/Github';
import Javascript from '@/components/ui/svgs/Javascript';
import Linux from '@/components/ui/svgs/Linux';
import MongoDB from '@/components/ui/svgs/MongoDB';
import Prisma from '@/components/ui/svgs/Prisma';
import Redis from '@/components/ui/svgs/Redis';
import Shadcn from '@/components/ui/svgs/Shadcn';
import SQL from '@/components/ui/svgs/SQL';
import Tailwind from '@/components/ui/svgs/Tailwind';
import Vercel from '@/components/ui/svgs/Vercel';
import Zustland from '@/components/ui/svgs/Zustland';
import Tanstack from '@/components/ui/svgs/Tanstack';
import AWS from '@/components/ui/svgs/AWS';
import Hono from '@/components/ui/svgs/Hono';
import Jest from '@/components/ui/svgs/Jest';

export const DATA = {
  skills: [
    { name: 'React', icon: ReactLight },
    { name: 'Next.js', icon: NextjsIconDark },
    { name: 'Typescript', icon: Typescript },
    { name: 'Javascript', icon: Javascript },
    { name: 'Node.js', icon: Nodejs },
    { name: 'Python', icon: Python },
    { name: 'Postgres', icon: Postgresql },
    { name: 'MongoDB', icon: MongoDB },
    { name: 'Redis', icon: Redis },
    { name: 'SQL', icon: SQL },
    { name: 'ExpressJS', icon: ExpressJs },
    { name: 'Hono', icon: Hono },
    { name: 'Prisma', icon: Prisma },
    { name: 'Tailwind', icon: Tailwind },
    { name: 'Shadcn', icon: Shadcn },
    { name: 'Git', icon: Git },
    { name: 'GitHub', icon: Github },
    { name: 'Drizzle', icon: Drizzle },
    { name: 'Zustand', icon: Zustland },
    { name: 'Tanstack', icon: Tanstack },
    { name: 'AWS', icon: AWS },
    { name: 'Docker', icon: Docker },
    { name: 'Vercel', icon: Vercel },
    { name: 'Linux', icon: Linux },
    { name: 'Jest', icon: Jest },
  ],
} as const;