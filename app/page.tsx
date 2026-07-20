import Container from './components/UI/container'
import Hero from "@/app/components/sections/Hero";
import About from '@/app/components/sections/About'
import Skills from "@/app/components/sections/Skills";
import Projects from "@/app/components/projects/Projects";
import Contact from "@/app/components/sections/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}

    
