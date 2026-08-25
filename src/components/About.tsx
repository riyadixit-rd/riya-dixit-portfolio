import { motion } from 'framer-motion';
import { about } from '@/data';
import { SectionHeading } from './Section';

export function About() {
  return (
    <section id="about" className="section-pad max-w-7xl mx-auto">
      <SectionHeading index="01" title="About" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="glass p-6 md:p-8 max-w-3xl text-lg leading-relaxed text-slate-300"
      >
        {about}
      </motion.p>
    </section>
  );
}
