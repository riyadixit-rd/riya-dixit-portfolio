import { motion } from 'framer-motion';
import { ExternalLink, GitPullRequest, Code2, Trophy } from 'lucide-react';
import { codingProfiles, ossContributions } from '@/data';
import { SectionHeading } from './Section';

export function Coding() {
  return (
    <section id="coding" className="section-pad max-w-7xl mx-auto">
      <SectionHeading index="05" title="Coding & Open Source" />

      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {codingProfiles.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass glass-hover p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1">
              <Code2 size={16} className="text-accent-400" />
              <h3 className="font-semibold text-white">{c.name}</h3>
            </div>
            <p className="font-mono text-sm text-slate-400 mb-4">@{c.username}</p>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !py-2 !text-xs mt-auto self-start"
            >
              Visit Profile <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2"
      >
        <GitPullRequest size={16} className="text-accent-400" /> Merged Pull Requests
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ossContributions.map((c, i) => (
          <motion.a
            key={`${c.repo}-${c.title}`}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
            className="glass glass-hover p-4 flex items-start gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
              <GitPullRequest size={15} className="text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">{c.title}</p>
              <p className="text-xs text-slate-500 font-mono truncate">{c.repo}</p>
            </div>
            <ExternalLink size={14} className="text-slate-600 group-hover:text-accent-300 transition-colors ml-auto shrink-0 mt-1" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
