import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile, socials } from '@/data';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono font-bold text-white">
            <span className="text-accent-400">R</span>iya Dixit
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Electronics & Communication Engineering | Software Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-accent-300 transition-colors">
            <Github size={18} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-accent-300 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 hover:text-accent-300 transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <a href="#hero" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-accent-300 transition-colors">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
      <p className="text-center text-xs text-slate-600 mt-6">
        © {new Date().getFullYear()} Riya Dixit. Built with React, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
}
