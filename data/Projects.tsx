import { Project } from "@/Type/project";

export const projects: Project[] = [
  { 
    id: 1,
    title: "GreenMart - Full Stack Grocery Store",
    description:
      "A modern full-stack grocery e-commerce application with authentication, shopping cart, checkout, order management, and an admin dashboard for managing products and orders.",
    image: "/projects/greenmart.jpg", // Add a screenshot here
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Redux Toolkit",
      "JWT",
      "Vercel",
    ],
    github: {
      frontend: "https://github.com/saadali-77/greenmart"
    },
    live: "https://greenmart-pi.vercel.app",
    featured: true,
  },
  {
    id: 2,
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
    id: 3,
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