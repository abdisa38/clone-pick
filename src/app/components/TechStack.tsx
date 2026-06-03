import React from "react";
import { motion } from "framer-motion";

export function TechStack() {
  const categories = [
    {
      name: "Frontend",
      color: "#61DAFB",
      skills: [
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#ffffff" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "HTML5", color: "#E34F26" },
      ],
    },
    {
      name: "Backend",
      color: "#339933",
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#ffffff" },
        { name: "REST API", color: "#6366f1" },
        { name: "JWT", color: "#ffffff" },
      ],
    },
    {
      name: "Database",
      color: "#47A248",
      skills: [
        { name: "MongoDB", color: "#47A248" },
        { name: "Prisma", color: "#2D3748" },
        { name: "PostgreSQL", color: "#4169E1" },
        { name: "Firebase", color: "#FFCA28" },
      ],
    },
    {
      name: "DevOps",
      color: "#2496ED",
      skills: [
        { name: "Docker", color: "#2496ED" },
        { name: "Git", color: "#F05032" },
        { name: "GitHub", color: "#ffffff" },
        { name: "Vercel", color: "#ffffff" },
        { name: "AWS", color: "#FF9900" },
      ],
    },
    {
      name: "AI & Tools",
      color: "#10A37F",
      skills: [
        { name: "Python", color: "#3776AB" },
        { name: "OpenAI", color: "#10A37F" },
        { name: "LangChain", color: "#1C3C3C" },
        { name: "VS Code", color: "#007ACC" },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="section-container relative overflow-hidden">
      {/* Background Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[120px] pointer-events-none" 
           style={{ background: 'var(--color-accent-secondary)' }} />

      <div className="max-w-container mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="pill-badge mx-auto mb-6" style={{
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid var(--color-border)',
          }}>
            <span style={{ color: 'var(--color-accent-primary)' }}>EXPERTISE</span>
          </div>
          
          <h2 className="font-headline text-display mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Technologies I Build With
          </h2>
          
          <p className="max-w-2xl mx-auto" style={{ 
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-body)'
          }}>
            From frontend to infrastructure — a modern toolkit for production systems
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, catIdx) => (
            <div key={category.name} className="flex flex-col gap-4">
              
              {/* Category Label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-6 rounded-full" style={{ background: category.color }}></div>
                <h3 className="text-sm font-semibold uppercase tracking-wider font-mono" 
                    style={{ color: 'var(--color-accent-primary)' }}>
                  {category.name}
                </h3>
              </div>

              {/* Tech Cards */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: catIdx * 0.1 + idx * 0.04 
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      y: -2,
                      boxShadow: `0 0 20px ${skill.color}40`,
                      borderColor: skill.color,
                    }}
                    className="glass-card px-4 py-3 flex items-center justify-center text-center cursor-default transition-all duration-200"
                    style={{
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
