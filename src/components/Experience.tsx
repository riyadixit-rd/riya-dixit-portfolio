import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/data';
import { SectionHeading } from './Section';

export function Experience() {
  return (
    <section id="experience" className="section-pad max-w-7xl mx-auto">
      <SectionHeading index="03" title="Experience" />
      <div className="relative max-w-3xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-400/50 via-accent-400/20 to-transparent" />
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.org}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-10 pb-10 last:pb-0"
          >
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 border-accent-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
            <div className="glass glass-hover p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Briefcase size={16} className="text-accent-400" />
                  {exp.org}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar size={13} /> {exp.period}
                </span>
              </div>
              <p className="text-accent-300 text-sm font-medium mb-4">{exp.role}</p>
              <ul className="space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-300">
                    <span className="text-accent-400 mt-1.5 w-1 h-1 rounded-full bg-accent-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
