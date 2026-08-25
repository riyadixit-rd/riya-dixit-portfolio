import { motion } from 'framer-motion';
import { skillGroups } from '@/data';
import { SectionHeading } from './Section';

export function Skills() {
  return (
    <section id="skills" className="section-pad max-w-7xl mx-auto">
      <SectionHeading index="02" title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: gi * 0.08 }}
            className="glass glass-hover p-6"
          >
            <h3 className="text-accent-300 font-semibold mb-4 text-sm uppercase tracking-wider">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
