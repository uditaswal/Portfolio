'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top); // Sort based on position

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: 0.3, 
        rootMargin: '0px 0px -20% 0px', 
        // This makes intersection fire a little *before* user fully reaches the bottom of section
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar activeSection={activeSection} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
