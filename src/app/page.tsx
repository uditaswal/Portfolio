"use client";

import { motion } from "framer-motion";
import "./globals.css";
import Projects from "./Project/page";
import Contact from "./Contact/page";
import Skill from "./Skill/page";
import Certificates from "./Certificates/page";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col justify-center items-center text-center pt-20 px-4 bg-gray-900">
        {/* Home Section */}
        <section
          id="home"
          className="flex-1 flex flex-col justify-center items-center py-12 sm:py-24"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Hi, I'm Udit
          </motion.h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl px-4">
            Passionate about building scalable applications. Production Support
            Engineer @
            <a
              href="https://www.hcltech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              HCL Tech
            </a>{" "}
            learning to be Software Developer 🚀
          </p>
          <a
            href="/Udit_Resume_Apr2025.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 bg-gray-900 w-full">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 bg-gray-900 w-full">
          <Skill />
        </section>

        {/* Certificate Section */}
        <section id="certificates" className="min-h-screen py-16 bg-gray-900 w-full">
          <Certificates />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 bg-gray-900 w-full">
          <Contact />
        </section>
      </main>
    </div>
  );
}
