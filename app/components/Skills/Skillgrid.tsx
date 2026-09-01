"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/Skills";
import { fadeUp, makeStagger, viewportOnce } from "@/lib/motion";
import SkillCard from "./Skillcard";

export default function SkillGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={makeStagger(0.12)}
    >
      {skills.map((category) => (
        <motion.div key={category.title} variants={fadeUp}>
          <SkillCard category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
}
