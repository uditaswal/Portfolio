import Footer from "./components/Footer";
import { Divider } from "./components/Section";
import TopNav from "./components/TopNav";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-[1500px] border-x lg:grid lg:grid-cols-[400px_1fr]">
        <aside className="border-b lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-r lg:border-b-0">
          <Hero />
        </aside>
        <main className="min-w-0">
          <TopNav />
          <div className="grid xl:grid-cols-2 xl:divide-x">
            <Experience />
            <Education />
          </div>
          <Divider />
          <Projects />
          <Divider />
          <Skills />
          <Divider />
          <Highlights />
          <Divider />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
