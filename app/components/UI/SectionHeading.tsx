"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-base-content/70">
        {description}
      </p>
    </motion.div>
  );
}