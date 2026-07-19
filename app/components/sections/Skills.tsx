import Section from "@/app/components/common/Section";
import SectionHeading from "@/app/components/common/SectionHeading";
import Container from "@/app/components/UI/container";
import SkillGrid from "@/app/components/Skills/Skillgrid";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          badge="Skills"
          title="Technologies I Work With"
          description="A collection of the tools and technologies I use to build modern, scalable web applications."
        />

        <SkillGrid />
      </Container>
    </Section>
  );
}