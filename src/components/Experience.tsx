'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-navy-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-600/10 border border-electric-500/30 text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Leadership Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Work & Leadership <span className="electric-gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Professional roles and organizational leadership positions held across media processing, e-commerce, and academic associations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-navy-950 border-2 border-electric-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-glow">
                <div className="w-2 h-2 rounded-full bg-electric-400" />
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 relative">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-electric-400" />
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      exp.type === 'Work' 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' 
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {exp.type}
                    </span>
                    
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-900/60 px-3 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Role Title */}
                <p className="text-sm sm:text-base font-semibold text-electric-400 mb-4">
                  {exp.role}
                </p>

                {/* Description Bullets */}
                <ul className="space-y-2.5">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
