import Footer from "./components/Footer";
import { Divider } from "./components/Section";
import SideIndex from "./components/SideIndex";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Honors from "./components/sections/Honors";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <>
      <SideIndex />
      <main className="mx-auto min-h-screen max-w-2xl border-x">
        <Hero />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Certificates />
        <Divider />
        <Honors />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
