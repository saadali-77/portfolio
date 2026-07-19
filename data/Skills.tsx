import {
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";

import { SkillCategory } from "@/types/skills";
export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Authentication",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "Prisma",
      "SQLite",
      "Mongoose",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "VS Code",
    ],
  },
];