"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/app/components/UI/container";
import Section from "@/app/components/common/Section";
import SectionHeading from "@/app/components/common/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, slideInLeft, staggerContainer } from "@/lib/motion";

const highlights = [
  "1+ Years of Development Experience",
  "Built Full-Stack MERN Applications",
  "Next.js & TypeScript Enthusiast",
  "Strong Problem-Solving Skills",
];

export default function About() {
  return (
    <Section id="about" alternate>
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Building modern web experiences."
          description="I enjoy creating fast, scalable, and user-friendly web applications with modern technologies."
        />

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInLeft}
            className="flex justify-center"
          >
            <div className="group relative h-80 w-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-50" />
              <div className="glass relative h-full w-full overflow-hidden rounded-3xl transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src="/saaddesc.png"
                  alt="Saad Ali"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-bold">
              MERN Stack Developer
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mt-6 leading-8 text-base-content/70"
            >
              I&apos;m passionate about building responsive, scalable, and
              user-friendly web applications using React, Next.js,
              Node.js, Express.js, MongoDB, and TypeScript.
            </motion.p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <CheckCircle2 className="text-primary" size={16} />
                  </span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* <button className="btn btn-primary mt-10">
              Download Resume
            </button> */}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
