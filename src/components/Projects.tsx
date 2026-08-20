'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, FileText, Layers, Sparkles, CheckCircle2, X } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import TableauEmbed from '@/components/TableauEmbed';
import { PROJECTS, Project } from '@/data/portfolioData';

const CATEGORIES = ['All', 'Machine Learning', 'Business Intelligence', 'Web Development'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-navy-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-600/10 border border-electric-500/30 text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Data Science & Software <span className="electric-gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore predictive machine learning models, end-to-end e-commerce BI dashboards, and web analytics applications.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-electric-600 text-white shadow-glow'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/60 hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsPreviewOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isPreviewOpen]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full relative group"
    >
      <div>
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-md text-xs font-semibold bg-electric-600/20 text-electric-400 border border-electric-500/30">
            {project.category}
          </span>
          <Sparkles className="w-4 h-4 text-slate-500 group-hover:text-electric-400 transition-colors" />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
          {project.title}
        </h3>

        {/* Highlight Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 my-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                <span className="text-sm font-extrabold text-electric-400">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Key Highlights */}
        <ul className="space-y-2.5 my-4">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Tech Stack & Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-800/80">
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="badge-glow px-2.5 py-0.5 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.preview && (
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-electric-600/20 hover:bg-electric-600/30 text-electric-400 border border-electric-500/40 hover:border-electric-400 transition-all duration-200 shadow-glow"
            >
              {project.preview === 'powerbi' ? (
                <FileText className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              <span>{project.preview === 'powerbi' ? 'View PDF' : 'View Dashboard'}</span>
            </button>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>GitHub Repo</span>
            </a>
          )}

          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{project.externalLabel || 'View Web App'}</span>
            </a>
          )}

        </div>

      </div>

      {isPreviewOpen && (
        <ProjectPreviewModal
          project={project}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </motion.div>
  );
}

function ProjectPreviewModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return createPortal(
    (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl glass-card"
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-700/60 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-electric-400">
              {project.preview === 'powerbi' ? 'Power BI Report' : 'Tableau Dashboard'}
            </p>
            <h3 className="truncate text-base font-bold text-white sm:text-lg">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 rounded-lg border border-slate-700/70 bg-slate-900/60 p-2 text-slate-300 transition-colors hover:border-electric-500/60 hover:text-electric-400"
            aria-label="Close project preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-2 sm:p-4">
          {project.preview === 'powerbi' ? (
            <iframe
              title="Power BI project report"
              src="/AAS_BI_184240028_ITGhifari.pdf#view=FitH"
              className="h-[70vh] min-h-[420px] w-full rounded-xl bg-white"
            />
          ) : (
            <TableauEmbed />
          )}
        </div>
      </motion.div>
    </div>
    ),
    document.body,
  );
}
