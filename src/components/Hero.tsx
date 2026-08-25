import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileDown, FolderGit2 } from 'lucide-react';
import { profile, typingRoles, socials } from '@/data';

function useTypingCycle(words: string[], typeMs = 90, deleteMs = 45, holdMs = 1600) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? deleteMs : typeMs
      );
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, i, words, typeMs, deleteMs, holdMs]);

  return text;
}

export function Hero() {
  const typed = useTypingCycle(typingRoles);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-8 items-center w-full py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm text-accent-400 mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Riya Dixit
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-400 font-medium">
            Electronics & Communication Engineering Student
          </p>

          <div className="mt-5 h-7 flex items-center">
            <span className="font-mono text-base md:text-lg text-accent-300">
              {typed}
              <span className="inline-block w-[2px] h-5 bg-accent-400 ml-1 animate-pulse align-middle" />
            </span>
          </div>

          <p className="mt-6 max-w-xl text-slate-400 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              <FolderGit2 size={17} /> View Projects
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <FileDown size={17} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-accent-300 transition-colors">
                <Github size={20} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-accent-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 hover:text-accent-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <span className="h-5 w-px bg-white/10" />
            <a href={`mailto:${profile.email}`} className="text-sm text-slate-400 hover:text-accent-300 transition-colors">
              {profile.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-full bg-accent-400/20 blur-2xl animate-glow-pulse" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-[3px] bg-gradient-to-br from-accent-400 via-blue-400 to-accent-600">
              <div className="w-full h-full rounded-full overflow-hidden bg-navy-900">
                <img
                  src={profile.photo}
                  alt="Riya Dixit"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent-300 transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
