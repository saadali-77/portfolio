
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];

  github: {
    frontend: string;
    backend?: string;
  };

  live: string;

  featured?: boolean;
}