import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Container from "@/app/components/UI/container";
import { socials } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-300 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-base-content/60">
            © {year} Saad Ali. All rights reserved.
          </p>

          <div className="flex gap-6 text-xl">
            {socials.github && (
              <Link
                href={socials.github}
                target="_blank"
                className="text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                <FaGithub />
              </Link>
            )}
            {socials.linkedin && (
              <Link
                href={socials.linkedin}
                target="_blank"
                className="text-base-content/60 transition-colors duration-200 hover:text-primary"
              >
                <FaLinkedin />
              </Link>
            )}
            {socials.email && (
              <Link
                href={`mailto:${socials.email}`}
                className="text-base-content/60 transition-colors duration-200 hover:text-primary"
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
