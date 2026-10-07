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
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-zinc-200/80 dark:border-zinc-800/80 premium-hero-mesh overflow-hidden"
    >
      {/* Top Colorful Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              <span className="text-blue-600 dark:text-blue-400">
                {PORTFOLIO_DATA.personal.professionalIdentity}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-indigo-600 dark:text-indigo-400">
                Creator Name: {PORTFOLIO_DATA.personal.creatorName}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {PORTFOLIO_DATA.personal.location}
              </span>
            </div>

            {/* Primary H1 */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08] [text-wrap:balance]">
                <span className="bg-gradient-to-r from-zinc-900 via-blue-800 to-indigo-700 dark:from-white dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.personal.fullName}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 dark:from-blue-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent tracking-tight [text-wrap:balance]">
                {PORTFOLIO_DATA.personal.headline}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.personal.heroIntroduction}
            </p>

            {/* Secondary Focus Areas as Clean Unboxed Text List */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">
                Core Focus & Interests
              </p>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {PORTFOLIO_DATA.personal.secondaryAreas.map((area, idx) => (
                  <React.Fragment key={area}>
                    <span>{area}</span>
                    {idx < PORTFOLIO_DATA.personal.secondaryAreas.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-blue-500 dark:text-blue-400"
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
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-600/20 rounded-xl transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-white/90 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Me
              </a>

              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300 hover:text-blue-600 dark:hover:text-white underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>View GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Profile Summary Bar */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono-tabular font-semibold text-zinc-900 dark:text-zinc-100">
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
            <div className="relative bg-white/95 dark:bg-[#121215]/95 border border-zinc-200/90 dark:border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xl shadow-blue-950/5">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/60 to-emerald-50/50 dark:from-zinc-900 dark:via-indigo-950/30 dark:to-emerald-950/20 border border-zinc-200/70 dark:border-zinc-800/70 flex flex-col items-center justify-center">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={`${PORTFOLIO_DATA.personal.fullName} (${PORTFOLIO_DATA.personal.creatorName}) profile photo`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="p-6 text-center flex flex-col items-center justify-center h-full w-full select-none">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/25">
                      <span className="font-display text-3xl font-extrabold tracking-tight text-white">
                        SM
                      </span>
                    </div>
                    <p className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {PORTFOLIO_DATA.personal.fullName}
                    </p>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {PORTFOLIO_DATA.personal.creatorName}
                    </p>
                    <div className="mt-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 max-w-[230px]">
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200/60 dark:border-blue-800/60 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
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
                      className="p-1.5 text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
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
