import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Repositories", value: 67, suffix: "+" },
    { label: "Contributions", value: 1450, suffix: "+" },
    { label: "Internship", value: 1, suffix: "" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* BACKGROUND LAYER - Gradient Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Hero Gradient Overlay */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        
        {/* Orb 1 - Indigo */}
        <motion.div
          className="absolute top-[-200px] left-[-100px] w-[800px] h-[800px] rounded-full opacity-15 blur-[120px] mix-blend-screen"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Orb 2 - Cyan */}
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-15 blur-[120px] mix-blend-screen"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Orb 3 - Violet */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-[120px] mix-blend-screen"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 text-center" style={{ paddingTop: '20vh' }}>
        
        {/* TOP LABEL - Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="pill-badge" style={{
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400">Available for Remote Opportunities</span>
          </div>
        </motion.div>

        {/* MAIN HEADLINE - Three Lines with Stagger */}
        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="font-headline font-extrabold leading-tight mb-2"
            style={{ fontSize: 'var(--text-hero)', color: 'var(--color-text-primary)' }}
          >
            Full-Stack Software Engineer
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.55,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="font-headline font-extrabold leading-tight mb-2"
            style={{ fontSize: 'var(--text-hero)', color: 'var(--color-text-primary)' }}
          >
            Building Real-World
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="font-headline font-extrabold leading-tight text-gradient"
            style={{ fontSize: 'var(--text-hero)' }}
          >
            Digital Solutions
          </motion.h1>
        </div>

        {/* TYPEWRITER SUBTITLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-6"
          style={{ 
            fontSize: '1.25rem',
            fontFamily: 'General Sans, system-ui, sans-serif',
            color: 'var(--color-text-secondary)'
          }}
        >
          <span style={{ color: 'var(--color-text-secondary)' }}>I'm a </span>
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2000,
              'AI Application Developer',
              2000,
              'Full-Stack Engineer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: 'var(--color-accent-secondary)', fontWeight: 500 }}
          />
        </motion.div>

        {/* DESCRIPTION TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="max-w-[600px] mx-auto mb-12"
          style={{
            fontSize: 'var(--text-body)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'General Sans, system-ui, sans-serif',
            lineHeight: 1.6,
          }}
        >
          Computer Science student with 2+ years of experience building production-ready applications from idea to deployment.
        </motion.p>

        {/* STAT CARDS ROW */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.2,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ 
                y: -4,
                borderColor: 'var(--color-border-glow)',
                boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)',
              }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                {inView && typeof stat.value === 'number' ? (
                  <>
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </>
                ) : (
                  stat.value + stat.suffix
                )}
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA BUTTONS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Primary Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-white relative overflow-hidden group"
            style={{ 
              background: 'var(--color-accent-primary)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: '1rem',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight size={18} />
            </span>
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium backdrop-blur-lg"
            style={{
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid var(--color-border-glow)',
              color: 'var(--color-text-primary)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: '1rem',
            }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>

          {/* Ghost Button */}
          <motion.a
            href="#contact"
            whileHover={{ color: 'var(--color-accent-secondary)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium relative group"
            style={{
              color: 'var(--color-text-primary)',
              fontFamily: 'General Sans, system-ui, sans-serif',
              fontSize: '1rem',
            }}
          >
            <Mail size={18} />
            Contact Me
            <span className="absolute bottom-3 left-8 right-8 h-[2px] bg-accent-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" 
                  style={{ background: 'var(--color-accent-secondary)' }} />
          </motion.a>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
