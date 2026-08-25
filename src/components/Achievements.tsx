import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievements } from '@/data';
import { SectionHeading } from './Section';

export function Achievements() {
  return (
    <section id="achievements" className="section-pad max-w-7xl mx-auto">
      <SectionHeading index="06" title="Achievements" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
            className="glass glass-hover p-4 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-400/20 flex items-center justify-center shrink-0">
              <Trophy size={16} className="text-accent-300" />
            </div>
            <p className="text-sm text-slate-200 leading-snug">{a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
