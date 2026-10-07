import React, { useState } from 'react';
import { Play, Eye, ArrowUpRight, FileText, Download, Upload, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface PortfolioSectionsProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenResume: () => void;
  onDownloadResume: () => void;
  customResumeName: string | null;
  onUploadCustomResume: (file: File) => void;
}

export const AboutAndProfileSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
              01. About Me
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 [text-wrap:balance]">
              Student & Independent Developer
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 pt-1">
              {PORTFOLIO_DATA.personal.location}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
              {PORTFOLIO_DATA.about.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Key Verified Facts Grid */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.about.highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Concise Professional Profile Section */}
        <div className="pt-12 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="max-w-2xl space-y-2 mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {PORTFOLIO_DATA.professionalProfile.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {PORTFOLIO_DATA.professionalProfile.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.professionalProfile.pillars.map((pillar, idx) => {
              const accents = [
                'from-blue-600 to-cyan-500',
                'from-indigo-600 to-purple-500',
                'from-emerald-500 to-teal-500',
                'from-amber-500 to-orange-500',
              ];
              return (
                <div
                  key={pillar.index}
                  className="relative overflow-hidden bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-2.5 shadow-sm hover:border-blue-500/50 transition-colors"
                >
                  <div
                    className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${accents[idx % accents.length]}`}
                  />
                  <span className="font-mono-tabular text-xs font-bold text-blue-600 dark:text-blue-400">
                    {pillar.index}.
                  </span>
                  <h4 className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
              02. Academic Background
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 [text-wrap:balance]">
              Education Timeline
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Verified academic records from primary school in Bakhariya to ongoing university studies at Siddharth University.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-zinc-200 dark:divide-zinc-800 border-t border-b border-zinc-200 dark:border-zinc-800">
            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.id}
                className="py-6 first:pt-6 last:pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  {/* Unboxed Metadata Line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-mono-tabular font-semibold text-zinc-800 dark:text-zinc-200">
                      {edu.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span
                      className={
                        edu.status === 'Currently Pursuing'
                          ? 'text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }
                    >
                      {edu.status}
                    </span>
                    {edu.boardOrUniversity && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{edu.boardOrUniversity}</span>
                      </>
                    )}
                    {edu.stream && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>Stream: {edu.stream}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {edu.level}
                  </h3>

                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {edu.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>

                  {edu.subjects && edu.subjects.length > 0 && (
                    <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        Subjects:
                      </span>
                      {edu.subjects.map((sub, idx) => (
                        <React.Fragment key={sub}>
                          <span>{sub}</span>
                          {idx < edu.subjects!.length - 1 && (
                            <span aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tabular Marks / Percentage Column */}
                {(edu.marks || edu.percentage) && (
                  <div className="sm:text-right shrink-0 font-mono-tabular bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 self-start">
                    {edu.percentage && (
                      <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {edu.percentage}
                      </p>
                    )}
                    {edu.marks && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Marks: {edu.marks}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 max-w-2xl mb-10">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
            03. Technical & Creative Capabilities
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 [text-wrap:balance]">
            Skills & Tools
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Organized by discipline without arbitrary percentage bars—focused on practical execution and ongoing learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((group, index) => {
            const skillAccents = [
              'from-blue-600 to-indigo-500',
              'from-emerald-500 to-teal-500',
              'from-purple-600 to-pink-500',
              'from-amber-500 to-rose-500',
              'from-cyan-500 to-blue-600',
            ];
            return (
              <div
                key={group.category}
                className="relative overflow-hidden bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-blue-500/50 transition-colors"
              >
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${skillAccents[index % skillAccents.length]}`}
                />
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-blue-600 dark:text-blue-400">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1 mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center justify-between"
                      >
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const GamesSection: React.FC<{
  onSelectProject: (project: ProjectItem) => void;
}> = ({ onSelectProject }) => {
  const [imgError, setImgError] = useState(false);
  const games = PORTFOLIO_DATA.projects.filter((p) => p.isGame);

  return (
    <section
      id="games"
      className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 max-w-2xl mb-10">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
            05. Interactive Browser Experiences
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 [text-wrap:balance]">
            Games Section
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Playable browser game development projects built independently to practice game logic, collision systems, and interactive web UI.
          </p>
        </div>

        <div className="space-y-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 aspect-16/10 lg:aspect-auto bg-zinc-100 dark:bg-zinc-900 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800 overflow-hidden">
                {!imgError ? (
                  <img
                    src={game.image}
                    alt={game.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <span className="font-display text-lg font-bold text-zinc-800 dark:text-zinc-200">
                      {game.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{game.displayCategoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                      Status: {game.status}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Independent Project</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {game.name}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {game.overview}
                  </p>

                  {game.disclaimer && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-1">
                      <strong>Clarification:</strong> {game.disclaimer}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-3">
                  {game.liveDemoUrl && (
                    <a
                      href={game.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Play Game</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => onSelectProject(game)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Project Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContentCreationSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="content-creation"
      className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                06. Digital Media & Creator Identity ({PORTFOLIO_DATA.personal.creatorName})
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 [text-wrap:balance]">
                {PORTFOLIO_DATA.contentCreation.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {PORTFOLIO_DATA.contentCreation.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.contentCreation.areas.map((area) => (
                <div
                  key={area.title}
                  className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 space-y-1.5"
                >
                  <h3 className="font-display text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {area.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold">
              <a
                href={PORTFOLIO_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline"
              >
                <span>Follow on Instagram (@5tar.suraj)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline"
              >
                <span>Connect on Facebook</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4">
              <div className="aspect-4/3 w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                {!imgError ? (
                  <img
                    src={PORTFOLIO_DATA.contentCreation.image}
                    alt={PORTFOLIO_DATA.contentCreation.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 text-center">
                    <span className="font-display text-base font-bold text-zinc-700 dark:text-zinc-300">
                      {PORTFOLIO_DATA.contentCreation.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1">
                <span>Creator Handle: {PORTFOLIO_DATA.personal.creatorName}</span>
                <span>Video · Canva · AI Media</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CertificationsAndResumeSection: React.FC<
  Pick<
    PortfolioSectionsProps,
    | 'onOpenResume'
    | 'onDownloadResume'
    | 'customResumeName'
    | 'onUploadCustomResume'
  >
> = ({
  onOpenResume,
  onDownloadResume,
  customResumeName,
  onUploadCustomResume,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadCustomResume(file);
    }
    e.target.value = '';
  };

  return (
    <div className="border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Certifications Section */}
        <section id="certificates" className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
              07. Verified Workshop & Training
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Certifications
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Official workshop credentials included in my resume.
            </p>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Issuer: {cert.issuer}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {cert.verificationStatus}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {cert.title} — {cert.issuer}
                </h3>

                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-1.5">
                    Key Topics Covered
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                    {cert.focusAreas.map((topic, i) => (
                      <React.Fragment key={topic}>
                        <span>{topic}</span>
                        {i < cert.focusAreas.length - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume / CV Section */}
        <section id="resume" className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
              08. Curriculum Vitae
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {PORTFOLIO_DATA.resume.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {PORTFOLIO_DATA.resume.description}
            </p>
          </div>

          <div className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {PORTFOLIO_DATA.personal.fullName} — Resume
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Includes verified education (UP Board & Siddharth University), skills, projects, and be10X AI Tools certification.
                </p>
                {customResumeName && (
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                    Attached custom file: {customResumeName}
                  </p>
                )}
              </div>
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <label className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-lg cursor-pointer transition-colors whitespace-nowrap">
                <Upload className="w-3.5 h-3.5" />
                <span>Replace Resume File</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.html"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
