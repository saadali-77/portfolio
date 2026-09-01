"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { Project } from "@/Type/project";
import TechBadge from "./TechBadge";

type Props = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="
        glass glow-border
        group
        overflow-hidden
        rounded-3xl
        shadow-sm
        transition-shadow
        duration-500
        hover:shadow-2xl
        hover:shadow-primary/10
      "
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? "h-[420px]" : "h-64"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={featured}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

        {featured && (
          <div className="glass absolute left-6 top-6 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white">
            <Sparkles size={14} className="text-accent" />
            Featured Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 p-8">
        <div>
          <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-base-content/70">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap gap-4">
          <Link
            href={project.live}
            target="_blank"
            className="
              group/btn
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-primary
              to-secondary
              px-5
              py-3
              text-primary-content
              shadow-md
              shadow-primary/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-secondary/30
            "
          >
            <ExternalLink
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
            Live Demo
          </Link>

          <Link
            href={project.github.frontend}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-base-300
              px-5
              py-3
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-primary
              hover:text-primary
            "
          >
            <Code2 size={18} />
            Frontend
          </Link>

          {project.github.backend && (
            <Link
              href={project.github.backend}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-base-300
                px-5
                py-3
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-primary
                hover:text-primary
              "
            >
              <Code2 size={18} />
              Backend
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
