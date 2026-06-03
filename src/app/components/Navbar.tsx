import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(5, 8, 16, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="max-w-container mx-auto px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 font-headline font-bold text-xl z-50">
          <div className="relative w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
               style={{
                 background: 'var(--gradient-border)',
                 padding: '2px'
               }}>
            <div className="w-full h-full rounded-lg flex items-center justify-center text-white font-extrabold"
                 style={{ background: 'var(--color-bg-primary)' }}>
              <span className="text-gradient">AA</span>
            </div>
          </div>
          <span style={{ color: 'var(--color-text-primary)' }}>Abdisa Awel</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative group transition-colors duration-200"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                        style={{ background: 'var(--color-accent-primary)' }} />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l pl-6" style={{ borderColor: 'var(--color-border)' }}>
            <button
              onClick={toggleTheme}
              className="transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <Github size={18} />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg font-medium text-sm text-white transition-all duration-200"
              style={{ background: 'var(--color-accent-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Hire Me
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={toggleTheme}
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--color-text-primary)' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 border-b shadow-xl py-6 px-6 flex flex-col gap-6 md:hidden"
          style={{
            background: 'var(--color-bg-secondary)',
            borderColor: 'var(--color-border)',
          }}
        >
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link, idx) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
