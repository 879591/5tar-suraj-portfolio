import React, { useEffect } from 'react';
import { X, Printer, Download, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadResume: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onDownloadResume,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#121215] border border-zinc-300 dark:border-zinc-800 rounded-2xl overflow-hidden my-8 shadow-2xl print:shadow-none print:border-none print:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Toolbar (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-[#F4F4F0] dark:bg-[#16161A] print:hidden">
          <div>
            <h2
              id="resume-modal-title"
              className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100"
            >
              {PORTFOLIO_DATA.personal.fullName} — Curriculum Vitae / Resume
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Verified information only · Ready to print or save as PDF
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onDownloadResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume File</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Sheet */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 space-y-8 text-zinc-900 dark:text-zinc-100 print:max-h-none print:overflow-visible print:text-black">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                {PORTFOLIO_DATA.personal.headline}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                {PORTFOLIO_DATA.personal.professionalIdentity} · Creator Name:{' '}
                {PORTFOLIO_DATA.personal.creatorName}
              </p>
            </div>

            <div className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 sm:text-right font-mono-tabular">
              <p>{PORTFOLIO_DATA.contact.location}</p>
              <p>Phone: {PORTFOLIO_DATA.contact.phone}</p>
              <p>Email: {PORTFOLIO_DATA.contact.email}</p>
              <p>GitHub: github.com/{PORTFOLIO_DATA.githubProfile.username}</p>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Professional Summary
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.heroIntroduction}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Education
            </h3>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div
                  key={edu.id}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-zinc-100 dark:border-zinc-800/60 last:border-none"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {edu.level} — {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                      {edu.details}
                    </p>
                    {edu.subjects && (
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Subjects: {edu.subjects.join(' · ')}
                      </p>
                    )}
                  </div>
                  <div className="text-xs font-mono-tabular text-zinc-600 dark:text-zinc-400 shrink-0 sm:text-right">
                    <span className="font-semibold">{edu.period}</span>
                    <span> · {edu.status}</span>
                    {edu.marks && (
                      <span className="block">
                        Marks: {edu.marks} ({edu.percentage})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Creative Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Skills & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {group.category}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                    {group.items.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Projects
            </h3>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold">
                      {proj.name}{' '}
                      <span className="text-xs font-normal text-zinc-500">
                        ({proj.displayCategoryLabel} · {proj.status})
                      </span>
                    </p>
                    {proj.liveDemoUrl && (
                      <a
                        href={proj.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 hover:underline"
                      >
                        <span>{proj.liveDemoUrl}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Certifications & Workshops
            </h3>
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div key={cert.id}>
                <p className="text-sm font-semibold">
                  {cert.title} — {cert.issuer}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                  Focus: {cert.focusAreas.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
