import {
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { SkillCategory } from "@/types/skills";

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      
    ],
  },

  {
    title: "Backend",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
    ],
  },

  {
    title: "Database",
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },

  {
    title: "Tools",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      
    ],
  },
];