import React, { useRef } from 'react';
import { ArrowUpRight, Upload, Trash2, MapPin, User } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  profileImage: string | null;
  onUploadProfileImage: (dataUrl: string) => void;
  onClearProfileImage: () => void;
  githubRepoCount: number | null;
}

export const Hero: React.FC<HeroProps> = ({
  profileImage,
  onUploadProfileImage,
  onClearProfileImage,
  githubRepoCount,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onUploadProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <section
      id="home"
      className="relative pt-10 pb-20 md:pt-16 md:pb-28 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <span>{PORTFOLIO_DATA.personal.professionalIdentity}</span>
              <span aria-hidden="true">·</span>
              <span>Creator Name: {PORTFOLIO_DATA.personal.creatorName}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                {PORTFOLIO_DATA.personal.location}
              </span>
            </div>

            {/* Primary H1 */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.08] [text-wrap:balance]">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 tracking-tight [text-wrap:balance]">
                {PORTFOLIO_DATA.personal.headline}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.personal.heroIntroduction}
            </p>

            {/* Secondary Focus Areas as Clean Unboxed Text List */}
            <div className="pt-1">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
                Focus Areas
              </p>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {PORTFOLIO_DATA.personal.secondaryAreas.map((area, idx) => (
                  <React.Fragment key={area}>
                    <span>{area}</span>
                    {idx < PORTFOLIO_DATA.personal.secondaryAreas.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-zinc-400 dark:text-zinc-600"
                      >
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Primary & Secondary Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-400 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Me
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>View GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Profile Summary Bar */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono-tabular font-medium text-zinc-900 dark:text-zinc-200">
                  github.com/{PORTFOLIO_DATA.githubProfile.username}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {githubRepoCount !== null
                    ? `${githubRepoCount} public repositories on GitHub`
                    : PORTFOLIO_DATA.githubProfile.fallbackNote}
                </span>
              </div>
              <a
                href={PORTFOLIO_DATA.githubProfile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
              >
                <span>{PORTFOLIO_DATA.githubProfile.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Profile Photo / Placeholder Frame */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/70 flex flex-col items-center justify-center">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={`${PORTFOLIO_DATA.personal.fullName} (${PORTFOLIO_DATA.personal.creatorName}) profile photo`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="p-6 text-center flex flex-col items-center justify-center h-full w-full select-none">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-200/80 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-300/60 dark:border-zinc-700">
                      <span className="font-display text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                        SM
                      </span>
                    </div>
                    <p className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {PORTFOLIO_DATA.personal.fullName}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {PORTFOLIO_DATA.personal.creatorName}
                    </p>
                    <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 max-w-[220px]">
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Verified Profile Placeholder · Upload your real photo below anytime.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Photo Controls & Identity Caption */}
              <div className="mt-4 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                    {PORTFOLIO_DATA.personal.fullName}
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                    {PORTFOLIO_DATA.personal.professionalIdentity}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    aria-label="Upload profile photo"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                    title="Upload or replace your profile photo"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{profileImage ? 'Replace Photo' : 'Add Photo'}</span>
                  </button>

                  {profileImage && (
                    <button
                      type="button"
                      onClick={onClearProfileImage}
                      aria-label="Remove custom profile photo"
                      title="Reset to placeholder"
                      className="p-1.5 text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 bg-zinc-100 dark:bg-zinc-800 rounded-md transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
