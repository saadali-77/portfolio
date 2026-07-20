import { Project } from "@/Type/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "DevTinder",
    description:
      "A full-stack MERN developer networking platform featuring JWT authentication, connection requests, profile management, and a responsive UI.",
    image: "/projects/devtinder.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT",
    ],
    github: {
      frontend: "https://github.com/saadali-77/dev-frontend",
      backend: "https://github.com/saadali-77/Dev-backend",
    },
    live: "https://devtinder-frontend-virid.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "A full-stack task management application with complete CRUD functionality and a responsive user interface.",
    image: "/projects/todo.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: {
      frontend: "https://github.com/saadali-77/TodoApp",
    },
    live: "https://todo-app-tau-seven-65.vercel.app",
  },
];