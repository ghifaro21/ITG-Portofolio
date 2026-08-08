'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from '@/components/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-600/10 border border-electric-500/30 text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Connect & <span className="electric-gradient-text">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a data science project, BI dashboard opportunity, or business analytics query? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-7 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Details</h3>
              
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-electric-500/50 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="p-3 rounded-xl bg-electric-600/20 text-electric-400 border border-electric-500/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Address</p>
                  <p className="text-sm font-semibold text-white group-hover:text-electric-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              {/* Phone / WA */}
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400 font-medium">LinkedIn Profile</p>
                  <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/itghifari
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Base Location</p>
                  <p className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-7 sm:p-8 relative">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill out the form below and I will get back to you as soon as possible.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Budiono"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="budiono123@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Hi Ghifar, I'd like to discuss a machine learning or data analytics dashboard project"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-electric-600 hover:bg-electric-500 transition-all duration-200 shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
