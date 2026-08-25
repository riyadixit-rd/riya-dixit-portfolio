import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data';
import { SectionHeading } from './Section';

export function Projects() {
  return (
    <section id="projects" className="section-pad max-w-7xl mx-auto">
      <SectionHeading index="04" title="Projects" />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="glass glass-hover p-6 flex flex-col group"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-400/20 flex items-center justify-center text-accent-300 font-mono font-bold text-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              {p.status && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {p.status}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{p.summary}</p>

            {p.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 mt-auto">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-accent-300 transition-colors"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-accent-300 transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
              {!p.github && !p.live && (
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  In Development
                </span>
              )}
              <span className="ml-auto text-slate-600 group-hover:text-accent-400 transition-colors">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
