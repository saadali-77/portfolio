import { projects } from "@/data/Projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-6 text-base-content/70 leading-relaxed">
            A collection of full-stack applications built with modern
            technologies including React, Next.js, Node.js, Express,
            MongoDB, and TypeScript.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16">
            <ProjectCard
              project={featuredProject}
              featured
            />
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="mb-8 text-2xl font-semibold">
              More Projects
            </h3>

            <div className="grid gap-8 md:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}