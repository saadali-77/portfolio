"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import Container from "../UI/container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <Logo />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">
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
    </header>
  );
}
