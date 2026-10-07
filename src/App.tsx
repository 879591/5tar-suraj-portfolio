/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import {
  AboutAndProfileSection,
  EducationSection,
  SkillsSection,
  GamesSection,
  ContentCreationSection,
  CertificationsAndResumeSection,
} from './components/PortfolioSections';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

const STORAGE_THEME_KEY = 'suraj_portfolio_theme';
const STORAGE_PHOTO_KEY = 'suraj_portfolio_photo';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_THEME_KEY);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {
      // Ignore storage access errors
    }
    return false;
  });

  const [profileImage, setProfileImage] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PHOTO_KEY);
      if (saved) return saved;
    } catch {
      // Ignore storage errors
    }
    return PORTFOLIO_DATA.personal.defaultProfilePhotoUrl || null;
  });

  const [githubRepoCount, setGithubRepoCount] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [customResumeFile, setCustomResumeFile] = useState<{
    name: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_THEME_KEY, darkMode ? 'dark' : 'light');
    } catch {
      // Ignore storage errors
    }
  }, [darkMode]);

  // Fetch live public repository count from GitHub API (falls back gracefully to "Explore my projects on GitHub" if offline/rate-limited)
  useEffect(() => {
    let isMounted = true;
    fetch(
      `https://api.github.com/users/${PORTFOLIO_DATA.githubProfile.username}`
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data && typeof data.public_repos === 'number') {
          setGithubRepoCount(data.public_repos);
        }
      })
      .catch(() => {
        // Fallback text is automatically shown when githubRepoCount is null
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleUploadProfileImage = (dataUrl: string) => {
    setProfileImage(dataUrl);
    try {
      localStorage.setItem(STORAGE_PHOTO_KEY, dataUrl);
    } catch {
      // Ignore quota errors
    }
  };

  const handleClearProfileImage = () => {
    setProfileImage(null);
    try {
      localStorage.removeItem(STORAGE_PHOTO_KEY);
    } catch {
      // Ignore errors
    }
  };

  const handleUploadCustomResume = (file: File) => {
    const url = URL.createObjectURL(file);
    setCustomResumeFile({ name: file.name, url });
  };

  const handleDownloadResume = () => {
    if (customResumeFile) {
      const a = document.createElement('a');
      a.href = customResumeFile.url;
      a.download = customResumeFile.name;
      a.click();
      return;
    }

    if (PORTFOLIO_DATA.resume.customPdfUrl) {
      const a = document.createElement('a');
      a.href = PORTFOLIO_DATA.resume.customPdfUrl;
      a.download = 'Suraj_Maurya_Resume.pdf';
      a.click();
      return;
    }

    // Generate clean standalone printable HTML Resume file with verified facts
    const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${PORTFOLIO_DATA.personal.fullName} - Resume</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; color: #18181b; max-width: 800px; margin: 40px auto; padding: 0 24px; line-height: 1.5; }
    h1 { font-size: 28px; margin: 0; }
    h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #52525b; border-bottom: 1px solid #e4e4e7; padding-bottom: 6px; margin-top: 28px; }
    .meta { color: #2563eb; font-weight: 600; font-size: 15px; margin-top: 4px; }
    .contact { font-size: 13px; color: #52525b; margin-top: 8px; }
    .item { margin-bottom: 14px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 14px; }
    .item-sub { font-size: 13px; color: #3f3f46; margin-top: 2px; }
  </style>
</head>
<body>
  <h1>${PORTFOLIO_DATA.personal.fullName} (${PORTFOLIO_DATA.personal.creatorName})</h1>
  <div class="meta">${PORTFOLIO_DATA.personal.headline}</div>
  <div class="contact">
    ${PORTFOLIO_DATA.contact.location} | Phone: ${PORTFOLIO_DATA.contact.phone} | Email: ${PORTFOLIO_DATA.contact.email} | GitHub: ${PORTFOLIO_DATA.socials.github}
  </div>

  <h2>Professional Summary</h2>
  <p style="font-size:14px;">${PORTFOLIO_DATA.personal.heroIntroduction}</p>

  <h2>Education</h2>
  ${PORTFOLIO_DATA.education
    .map(
      (e) => `<div class="item">
    <div class="item-header">
      <span>${e.level} — ${e.institution}</span>
      <span>${e.period} (${e.status})${e.percentage ? ` · ${e.percentage}` : ''}</span>
    </div>
    <div class="item-sub">${e.details}${e.marks ? ` Marks: ${e.marks}.` : ''}${e.subjects ? ` Subjects: ${e.subjects.join(', ')}.` : ''}</div>
  </div>`
    )
    .join('')}

  <h2>Skills</h2>
  ${PORTFOLIO_DATA.skills
    .map(
      (s) => `<div class="item">
    <div class="item-header"><span>${s.category}</span></div>
    <div class="item-sub">${s.items.join(' · ')}</div>
  </div>`
    )
    .join('')}

  <h2>Projects</h2>
  ${PORTFOLIO_DATA.projects
    .map(
      (p) => `<div class="item">
    <div class="item-header">
      <span>${p.name} (${p.displayCategoryLabel})</span>
      <span>Status: ${p.status}</span>
    </div>
    <div class="item-sub">${p.shortDescription}${p.liveDemoUrl ? ` Live: ${p.liveDemoUrl}` : ''}</div>
  </div>`
    )
    .join('')}

  <h2>Certifications</h2>
  ${PORTFOLIO_DATA.certifications
    .map(
      (c) => `<div class="item">
    <div class="item-header"><span>${c.title} — ${c.issuer}</span></div>
    <div class="item-sub">Topics: ${c.focusAreas.join(' · ')}</div>
  </div>`
    )
    .join('')}
</body>
</html>`;

    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Suraj_Maurya_Resume.html';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F0] text-zinc-900 dark:bg-[#09090B] dark:text-zinc-100">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main className="flex-1">
        <Hero
          profileImage={profileImage}
          onUploadProfileImage={handleUploadProfileImage}
          onClearProfileImage={handleClearProfileImage}
          githubRepoCount={githubRepoCount}
        />

        <AboutAndProfileSection />

        <EducationSection />

        <SkillsSection />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <GamesSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ContentCreationSection />

        <CertificationsAndResumeSection
          onOpenResume={() => setResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
          customResumeName={customResumeFile?.name || null}
          onUploadCustomResume={handleUploadCustomResume}
        />

        <ContactSection />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownloadResume={handleDownloadResume}
      />
    </div>
  );
}

