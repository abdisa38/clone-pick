import React from "react";
import { motion } from "framer-motion";

export function About() {
  const timeline = [
    { year: "2022", title: "Started Coding Journey", desc: "Discovered a passion for programming and computer science fundamentals." },
    { year: "2023", title: "Built First Production App", desc: "Developed and deployed first full-stack application serving real users." },
    { year: "2023", title: "MERN Stack Mastery", desc: "Deep dive into MongoDB, Express, React, and Node.js ecosystem." },
    { year: "2024", title: "Kuraz Technologies Internship", desc: "Software Engineering Intern building enterprise solutions." },
    { year: "2024", title: "Leadership at CTC", desc: "Led the Code Tech Community Software Development team." },
    { year: "2025", title: "AI Application Development", desc: "Building intelligent systems with OpenAI and LangChain." },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT - Portrait & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex flex-col gap-6"
          >
            <div>
              <h2 className="font-headline text-display mb-4" style={{ color: 'var(--color-text-primary)' }}>
                The Engineer Behind the Code
              </h2>
              <div className="h-1 w-20 rounded-full" style={{ background: 'var(--color-accent-primary)' }}></div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden aspect-square glass-card border-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Abdisa Awel Tahir"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="space-y-4 leading-relaxed" style={{ 
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--text-body)'
            }}>
              <p>
                I'm a Computer Science student with over 2 years of experience building production-ready applications from idea to deployment.
              </p>
              <p>
                My focus is on creating scalable architectures, intuitive user interfaces, and integrating AI to solve real-world business problems.
              </p>
              <p>
                From leading development teams to shipping AI-powered legal platforms, I bring both technical expertise and a passion for impact.
              </p>
            </div>
          </motion.div>

          {/* RIGHT - Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="relative pl-8 border-l-2 space-y-10 py-4" style={{ borderColor: 'var(--color-border)' }}>
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--color-bg-primary)',
                      borderColor: 'var(--color-accent-primary)',
                    }}
                  />
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold tracking-wider uppercase font-mono" style={{ color: 'var(--color-accent-primary)' }}>
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold font-headline" style={{ color: 'var(--color-text-primary)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
