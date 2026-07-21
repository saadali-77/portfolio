import Image from "next/image";
import Container from "@/app/components/UI/container";
import Section from "@/app/components/common/Section";
import SectionHeading from "@/app/components/common/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "1+ Years of Development Experience",
  "Built Full-Stack MERN Applications",
  "Next.js & TypeScript Enthusiast",
  "Strong Problem-Solving Skills",
];

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Building modern web experiences."
          description="I enjoy creating fast, scalable, and user-friendly web applications with modern technologies."
        />

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left */}
          <div className="flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-base-300">
              <Image
                src="/saaddesc.png"
                alt="Saad Ali"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-3xl font-bold">
              MERN Stack Developer
            </h3>

            <p className="mt-6 leading-8 text-base-content/70">
              I'm passionate about building responsive, scalable, and
              user-friendly web applications using React, Next.js,
              Node.js, Express.js, MongoDB, and TypeScript.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* <button className="btn btn-primary mt-10">
              Download Resume
            </button> */}
          </div>
        </div>
      </Container>
    </Section>
  );
}