"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/Projects";
import ProjectCard from "./ProjectCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
            <p className="text-primary font-semibold uppercase tracking-widest">
              Portfolio
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl font-bold md:text-5xl"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 leading-relaxed text-base-content/70"
          >
            A collection of full-stack applications built with modern
            technologies including React, Next.js, Node.js, Express,
            MongoDB, PostgreSQL, Prisma, and TypeScript.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured
            />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="mt-20 mb-8 text-2xl font-semibold">
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
