"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowRight, ChevronDown } from "lucide-react";
import Container from "@/app/components/UI/container";
import { profile } from "@/data/Profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-20"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-[130px]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-success"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for Work
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m <br />
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-base-content/70"
            >
              Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. I build fast, scalable, and user-friendly web applications end-to-end — from responsive front-end interfaces to robust, well-structured APIs. Passionate about writing clean code and delivering products that balance performance with great user experience.
             
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#projects"
                className="btn group relative overflow-hidden border-none bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <a
                href="/saadres.pdf"
                download
                className="glass btn border-none text-base-content/80 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-white hover:shadow-lg hover:shadow-primary/20"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex gap-4 text-2xl"
            >
              <Link
                href="https://github.com/saadali-77"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/saadali77"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <FaLinkedin />
              </Link>

              <Link
                href="mailto:Saadali6991550@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <FaEnvelope />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="animate-float relative">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-40 blur-2xl" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full ring-4 ring-primary/40 ring-offset-8 ring-offset-base-100 md:h-80 md:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/about.png"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-base-content/40 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="animate-bounce" size={18} />
      </motion.div>
    </section>
  );
}
