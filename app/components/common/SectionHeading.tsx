"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <motion.div
      className="mb-16 max-w-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base leading-relaxed text-base-content/70 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
