import Footer from "./components/Footer";
import { Divider } from "./components/Section";
import NoticeHost from "./components/Notice";
import TopNav from "./components/TopNav";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

/**
 * Page shell.
 *
 * Small screens: one column, the whole page scrolls.
 * Wide screens (lg+): the shell fills the window and never scrolls. The left
 * rail stays put and only the right column (`.scroll-area`) scrolls.
 *
 * To add, remove or reorder a section: edit the list below and the matching
 * entry in `sections` (src/app/data.ts) so the nav stays in sync.
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-[1500px] border-x lg:grid lg:h-screen lg:grid-cols-[400px_1fr] lg:overflow-hidden">
      <aside className="flex flex-col border-b lg:overflow-y-auto lg:border-r lg:border-b-0">
        <Hero />
        <Footer className="mt-auto hidden lg:block" />
      </aside>

      <div className="scroll-area min-w-0 lg:overflow-y-auto">
        <TopNav />
        <main>
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
        <Footer className="lg:hidden" />
      </div>
      <NoticeHost />
    </div>
  );
}
