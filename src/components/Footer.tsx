import React from 'react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Games', href: '#games' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#09090B] border-t border-zinc-200 dark:border-zinc-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-2.5">
            <a
              href="#home"
              className="font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              {PORTFOLIO_DATA.personal.fullName}
            </a>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              {PORTFOLIO_DATA.personal.creatorName}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
              {PORTFOLIO_DATA.personal.headline}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 pt-1">
              {PORTFOLIO_DATA.personal.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-4 hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
              Social & Contact
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-4 hover:underline"
                >
                  <span>GitHub (@{PORTFOLIO_DATA.githubProfile.username})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-4 hover:underline"
                >
                  <span>Instagram (@5tar.suraj)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-4 hover:underline"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              {PORTFOLIO_DATA.socials.youtube && (
                <li>
                  <a
                    href={PORTFOLIO_DATA.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-4 hover:underline"
                  >
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              )}
              {PORTFOLIO_DATA.socials.linkedin && (
                <li>
                  <a
                    href={PORTFOLIO_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-4 hover:underline"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              )}
              <li className="pt-2 border-t border-zinc-200/70 dark:border-zinc-800/70">
                <a
                  href={PORTFOLIO_DATA.contact.mailtoUrl}
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 font-mono-tabular"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{PORTFOLIO_DATA.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 font-mono-tabular"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp: {PORTFOLIO_DATA.contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© 2026 {PORTFOLIO_DATA.personal.fullName}</p>
          <p>
            {PORTFOLIO_DATA.personal.creatorName} · {PORTFOLIO_DATA.personal.headline}
          </p>
        </div>
      </div>
    </footer>
  );
};
