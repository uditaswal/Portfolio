'use client';

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-lg bg-gray-900 fixed top-0 w-full z-50">
      {/* Logo or Name */}
      <div className="text-white text-xl font-bold">Portfolio</div>

      {/* Desktop Links */}
      <div className="hidden sm:flex items-center space-x-8">
        <NavLinks activeSection={activeSection} />
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-3xl sm:hidden focus:outline-none"
      >
        ⋮
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col space-y-4 sm:hidden">
          <NavLinks activeSection={activeSection} onLinkClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  activeSection: string;
  onLinkClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ activeSection, onLinkClick }) => (
  <>
    {[
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "certificates", label: "Certificates" },
      { id: "achievements", label: "Honors & Awards" },
      { id: "contact", label: "Contact" },
    ].map(({ id, label }) => (
      <Link
        key={id}
        href={`#${id}`}
        onClick={onLinkClick}
        className={`text-lg font-medium transition-colors ${
          activeSection === id ? 'text-blue-400' : 'text-white hover:text-blue-300'
        }`}
      >
        {label}
      </Link>
    ))}
  </>
);

export default Navbar;
