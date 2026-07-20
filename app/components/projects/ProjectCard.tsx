"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
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
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-base-300
        bg-base-100
        shadow-sm
        transition-all
        duration-300
        hover:border-primary/40
        hover:shadow-2xl
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
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {featured && (
          <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            ⭐ Featured Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 p-8">
        <div>
          <h3 className="text-3xl font-bold tracking-tight">
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
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-5
              py-3
              text-primary-content
              transition
              hover:scale-105
            "
          >
            <ExternalLink size={18} />
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
              transition
              hover:border-primary
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
                transition
                hover:border-primary
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