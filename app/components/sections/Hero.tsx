"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/UI/container";
import { profile } from '@/data/Profile'


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge badge-success mb-6">
              Available for Work
            </div>

            <h1 className="text-6xl font-black leading-tight">
              Hi, I'm
              <br />

              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-base-content/70">
              MERN Stack Developer specializing in
              React, Next.js, Node.js and MongoDB.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="btn btn-primary">
                View Projects
                <ArrowRight size={18} />
              </button>

              <button className="btn btn-outline">
                Download Resume
              </button>

            </div>

            <div className="flex gap-6 mt-10 text-2xl">

              <Link href="#">
                <FaGithub />
              </Link>

              <Link href="#">
                <FaLinkedin />
              </Link>

              <Link href="#">
                <FaEnvelope />
              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >
            <div className="avatar">

              <div className="w-80 rounded-full ring ring-primary ring-offset-8">

                <img src="/saad.jpg" alt="Profile"/>

              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}