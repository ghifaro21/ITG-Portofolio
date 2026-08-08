'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Award, MapPin, Database, LineChart, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-hero-pattern overflow-hidden">
      
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-electric-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status & Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-300 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.institution}</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Hi, I&apos;m <span className="electric-gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-100 leading-snug mb-4">
              {PERSONAL_INFO.bio}
            </p>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.subBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-electric-600 hover:bg-electric-500 transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:scale-[1.02] w-full sm:w-auto text-center"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] w-full sm:w-auto text-center"
              >
                <Mail className="w-4 h-4 text-electric-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Stats Bar */}
            <div className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Dynamic Glass Card / Visual Data Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              
              {/* Card Title Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/60 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-electric-600/20 text-electric-400 border border-electric-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Analytics & ML Core</h3>
                    <p className="text-xs text-slate-400">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>Bandung</span>
                </div>
              </div>

              {/* Data Science Specialization Cards */}
              <div className="space-y-4">
                
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Predictive ML Modeling</h4>
                    <p className="text-xs text-slate-400 mt-1">Random Forest & Decision Trees with high ROC-AUC metrics (85.5% Accuracy).</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-electric-500/10 text-electric-400 mt-0.5">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Business Intelligence & DAX</h4>
                    <p className="text-xs text-slate-400 mt-1">Power BI & Tableau dashboards processing R$13.59M revenue & 100k+ orders.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Data Engineering & Star Schema</h4>
                    <p className="text-xs text-slate-400 mt-1">ETL modeling, relational database queries, and interactive Web Apps (Streamlit / Flask).</p>
                  </div>
                </div>

              </div>

              {/* Footer status bar in card */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>ULBI Excellence Scholar</span>
                </span>
                <span className="font-mono text-electric-400 font-semibold">DATA-DRIVEN</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
