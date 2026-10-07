import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, Play } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F4F4F0] dark:bg-[#121215] border border-zinc-300 dark:border-zinc-800 rounded-2xl overflow-hidden my-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16161A]">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span>{project.displayCategoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span
              className={
                project.status === 'Live'
                  ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
                  : 'text-amber-700 dark:text-amber-400 font-semibold'
              }
            >
              Status: {project.status}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details modal"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Screenshot / Preview */}
          <div className="aspect-16/9 w-full rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            {!imgError ? (
              <img
                src={project.image}
                alt={project.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 text-center">
                <span className="font-display text-xl font-bold text-zinc-700 dark:text-zinc-300">
                  {project.name}
                </span>
              </div>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h2
              id="modal-project-title"
              className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100"
            >
              {project.name}
            </h2>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
              {project.tagline}
            </p>
          </div>

          {project.disclaimer && (
            <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              <strong>Project Clarification:</strong> {project.disclaimer}
            </div>
          )}

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Implemented & Planned Focus Areas
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-5">
              {project.features.map((feat) => (
                <li key={feat} className="leading-relaxed">
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Technologies Used
            </h3>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Development Info */}
          <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Development Information
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.developmentInfo}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  {project.isGame ? (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Play Game Live</span>
                    </>
                  ) : (
                    <>
                      <span>Open Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
