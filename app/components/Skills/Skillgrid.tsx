"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/Skills";
import SkillCard from "./Skillcard";

export default function SkillGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {skills.map((category) => (
        <motion.div
          key={category.title}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            },
          }}
        >
          <SkillCard category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
}