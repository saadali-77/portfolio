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
              Hi, I&apos;m <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/70">
              MERN Stack Developer specializing in React, Next.js, Node.js,
              Express.js and MongoDB. I build fast, scalable and
              user-friendly web applications.
            </p>
{/* Buttons */}
<div className="mt-8 flex flex-wrap items-center gap-4">
  <Link
    href="#projects"
    className="btn group relative overflow-hidden border-none bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5"
  >
    <span className="relative z-10 flex items-center gap-2">
      View Projects
      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </Link>

  <a
    href="/saadres.pdf"
    download
    className="btn border border-indigo-400/30 bg-white/5 text-indigo-300 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30"
  >
    Download Resume
  </a>
</div>




           








            {/* Social Links */}
            <div className="mt-10 flex gap-6 text-2xl">
              <Link
                href="https://github.com/saadali-77"
                target="_blank"
                aria-label="GitHub"
                className="transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                <FaGithub />
              </Link>
              <Link
                href="www.linkedin.com/in/saadali77"
                target="_blank"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="mailto:saadali6991550@email.com"
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
                src="/about.png"
                alt={profile.name}
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
