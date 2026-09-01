import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Container from "@/app/components/UI/container";
import { socials } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />

      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-base-content/60">
            © {year} Saad Ali. All rights reserved.
          </p>

          <div className="flex gap-3 text-xl">
            {socials.github && (
              <Link
                href={socials.github}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full text-base-content/60 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <FaGithub />
              </Link>
            )}
            {socials.linkedin && (
              <Link
                href={socials.linkedin}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full text-base-content/60 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <FaLinkedin />
              </Link>
            )}
            {socials.email && (
              <Link
                href={`mailto:${socials.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full text-base-content/60 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <FaEnvelope />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
