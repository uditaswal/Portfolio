'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
const skills = [
  // Basics
  { name: "HTML5", image: "html5.svg" },
  { name: "CSS3", image: "css3.svg" },
  { name: "JavaScript", image: "javascript.svg" },
  { name: "Typescript", image: "typescript.svg" },

  // Frontend Frameworks
  { name: "React.js", image: "react.svg" },
  { name: "Next.js", image: "nextdotjs.svg" },
  { name: "TailwindCSS", image: "tailwindcss.svg" },

  // Backend
  { name: "Node.js", image: "nodedotjs.svg" },
  { name: "MongoDB", image: "mongodb.svg" },
  { name: "Oracle SQL", image: "oracle.png" },

  // Cloud
  { name: "AWS", image: "aws.svg" },
  { name: "Azure", image: "azure.png" },
];


export default function Skills() {
  return (
    <section id="skills" className="mt-24 max-w-7xl mx-auto w-full p-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">⚡ My Tech Stack ⚡</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group relative w-24 h-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.15 }}
            whileInView={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity } }}
          >
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-3 shadow-md transition group-hover:shadow-blue-400/50">
              <Image
                src={`/logo/${skill.image}`}
                alt={skill.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* skill name */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-80 text-white text-xs rounded-lg px-2 py-1 pointer-events-none">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
