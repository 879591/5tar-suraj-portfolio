import React, { useState } from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectCategory, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_CATEGORIES: ProjectCategory[] = [
  'All',
  'Web Development',
  'Game Development',
  'AI & Technology',
  'Education',
  'Content Creation',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return (
      project.category === activeFilter ||
      project.secondaryCategories?.includes(activeFilter)
    );
  });

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Segmented Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
              04. Selected Works
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 [text-wrap:balance]">
              Projects & Practical Builds
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Genuine web platforms, digital service concepts, and browser game development projects.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional Buttons) */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1 p-1.5 bg-white/80 dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-xl self-start shadow-xs"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-10 text-center">
            <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              No standalone repositories listed under "{activeFilter}" yet.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-md mx-auto">
              {activeFilter === 'Content Creation'
                ? 'Explore the dedicated Content Creation & Digital Media section below for video editing, Canva design, and social media work.'
                : 'Check back soon or view all projects to explore existing builds.'}
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveFilter('All')}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all cursor-pointer"
              >
                Show All Projects
              </button>
              {activeFilter === 'Content Creation' && (
                <a
                  href="#content-creation"
                  className="px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:border-zinc-900 dark:hover:border-zinc-400 transition-colors"
                >
                  Go to Content Section
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const topBarGradients = [
                'from-blue-600 via-indigo-500 to-cyan-500',
                'from-indigo-600 via-purple-500 to-pink-500',
                'from-emerald-500 via-teal-500 to-blue-600',
              ];
              const barGradient = topBarGradients[idx % topBarGradients.length];

              return (
                <article
                  key={project.id}
                  className="group relative bg-white dark:bg-[#121215] border border-zinc-200/90 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:border-blue-500/60 dark:hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-950/5"
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${barGradient}`} />
                  <div>
                    {/* Project Image with Zero-Broken-Image Fallback */}
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative aspect-4/3 w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/70 dark:border-zinc-800/70 overflow-hidden cursor-pointer"
                    >
                      {!imageErrors[project.id] ? (
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-100 dark:bg-zinc-900">
                          <span className="font-display text-lg font-bold text-zinc-800 dark:text-zinc-200">
                            {project.name}
                          </span>
                          <span className="text-xs text-zinc-500 mt-1">
                            {project.displayCategoryLabel}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Body: Leads directly with quiet 1-line text kicker and title (No Badge Sandwich) */}
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                        <span className="font-medium text-blue-600 dark:text-blue-400">
                          {project.displayCategoryLabel}
                        </span>
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

                      <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          {project.name}
                        </button>
                      </h3>

                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {project.disclaimer && (
                        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 italic">
                          Note: {project.disclaimer}
                        </p>
                      )}

                      {/* Technologies as clean unboxed text with middot separators */}
                      <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                        <p className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 mb-1">
                          Technologies
                        </p>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                          {project.technologies.map((tech, index) => (
                            <React.Fragment key={tech}>
                              <span>{tech}</span>
                              {index < project.technologies.length - 1 && (
                                <span
                                  aria-hidden="true"
                                  className="text-blue-500 dark:text-blue-400"
                                >
                                  ·
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 pb-6 pt-2 flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Project Details</span>
                    </button>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xs rounded-lg transition-all whitespace-nowrap"
                      >
                        {project.isGame ? (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Play Game</span>
                          </>
                        ) : (
                          <>
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline transition-colors whitespace-nowrap ml-auto"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
