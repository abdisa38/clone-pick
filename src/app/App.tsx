import React, { useEffect, useRef } from "react";
import Lenis from 'lenis';
import { ThemeProvider } from "./components/ThemeProvider";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { CurrentProject } from "./components/CurrentProject";
import { Experience } from "./components/Experience";
import { Leadership } from "./components/Leadership";
import { GithubImpact } from "./components/GithubImpact";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { BackgroundGrid } from "../components/ui/BackgroundGrid";
import { CursorGlow } from "../components/ui/CursorGlow";

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-bg-primary text-text-primary relative overflow-x-hidden">
        {/* Background Elements */}
        <BackgroundGrid />
        <CursorGlow />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <CurrentProject />
          <Experience />
          <Leadership />
          <GithubImpact />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 w-full py-12 border-t border-border">
          <div className="max-w-container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-headline font-bold mb-1">Abdisa Awel Tahir</h3>
                <p className="text-text-secondary text-sm">Full-Stack Software Engineer</p>
              </div>
              
              <div className="flex gap-6 text-sm text-text-secondary">
                <a href="#about" className="hover:text-accent-primary transition-colors">About</a>
                <a href="#tech-stack" className="hover:text-accent-primary transition-colors">Tech Stack</a>
                <a href="#projects" className="hover:text-accent-primary transition-colors">Projects</a>
                <a href="#experience" className="hover:text-accent-primary transition-colors">Experience</a>
                <a href="#contact" className="hover:text-accent-primary transition-colors">Contact</a>
              </div>
              
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-text-secondary hover:text-accent-primary transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-text-secondary hover:text-accent-primary transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-text-muted text-sm">
                © {new Date().getFullYear()} Abdisa Awel Tahir — Designed & Built with precision
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
