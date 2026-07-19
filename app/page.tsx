import Container from './components/UI/container'
import Hero from "@/app/components/sections/Hero";
import About from '@/app/components/sections/About'
import Skills from "@/app/components/sections/Skills";
export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Skills/>
    </main>
  );
}
