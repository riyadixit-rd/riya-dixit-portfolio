import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-center gap-4"
    >
      <span className="font-mono text-sm text-accent-400">{index}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-accent-400/40 to-transparent" />
    </motion.div>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
