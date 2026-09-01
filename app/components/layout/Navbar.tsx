"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import Container from "../UI/container";
import { EASE_OUT } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out ${
        scrolled
          ? "glass shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* subtle animated top accent line, only visible once scrolled */}
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <Logo />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 px-1">
              <NavLinks />
            </ul>
          </div>

           {/* <div className="navbar-end">
            <a href="/resume.pdf" className="btn btn-primary">
              Resume
            </a>
          </div>  */}
        </div>
      </Container>
    </motion.header>
  );
}
