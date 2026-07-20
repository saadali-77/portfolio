"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import Container from "@/app/components/UI/container";
import { profile } from "@/data/Profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center py-20"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge badge-success badge-lg mb-6">
              Available for Work
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
              Hi, I'm
              <br />

              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/70">
              MERN Stack Developer specializing in React, Next.js,
              Node.js, Express.js and MongoDB. I build fast,
              scalable and user-friendly web applications.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#projects" className="btn btn-primary">
                View Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="btn btn-outline"
              >
                Download Resume
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-6 text-2xl">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                aria-label="GitHub"
                className="transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                <FaLinkedin />
              </Link>

              <Link
                href="mailto:your@email.com"
                aria-label="Email"
                className="transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                <FaEnvelope />
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-full ring-4 ring-primary ring-offset-8 ring-offset-base-100 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image
                src='/about.png'
                alt="Saad Ali"
                fill
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}