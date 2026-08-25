import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { profile, socials } from '@/data';
import { SectionHeading } from './Section';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'riya-dixit', href: socials.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'riyadixit-rd', href: socials.github, icon: Github },
  { label: 'LeetCode', value: 'dixitriya', href: socials.leetcode, icon: ExternalLink },
  { label: 'Codeforces', value: 'dixitriya', href: socials.codeforces, icon: ExternalLink },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad max-w-7xl mx-auto">
      <SectionHeading index="07" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="glass p-8 md:p-12 max-w-2xl"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Let's Connect</h3>
        <p className="text-slate-400 mb-8">
          Open to internships, collaborations, and engineering opportunities. The fastest way to reach me is email.
        </p>

        <a href={`mailto:${profile.email}`} className="btn-primary mb-8">
          <Mail size={17} /> Email Me
        </a>

        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-accent-400/30 hover:bg-white/[0.03] transition-all group"
              >
                <Icon size={18} className="text-accent-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">{l.label}</p>
                  <p className="text-sm text-slate-200 truncate">{l.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
