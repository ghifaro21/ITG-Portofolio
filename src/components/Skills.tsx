'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, BarChart3, Sparkles, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-electric-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-blue-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-navy-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-600/10 border border-electric-500/30 text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Core Competencies & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technical Stack & <span className="electric-gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tooling and methodologies used across machine learning workflows, business intelligence pipelines, and data applications.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-7 relative flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {ICON_MAP[cat.iconName] || <Code2 className="w-5 h-5 text-electric-400" />}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-electric-500/50 hover:text-white hover:shadow-glow transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>VERIFIED SKILLSET</span>
                <span>{cat.skills.length} TOOLS / METHODS</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
