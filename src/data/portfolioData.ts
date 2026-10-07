/**
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * 
 * Easy-to-edit data file for Suraj Maurya (5tar Suraj).
 * You can update your bio, education, skills, projects, links, and contact info
 * right here without needing to modify the website layout or React components.
 */

import project5tarResultImg from '../assets/images/project_5tar_result_1791389848607.jpg';
import projectOnlineWebImg from '../assets/images/project_online_web_service_1791389864537.jpg';
import projectEndlessRunnerImg from '../assets/images/project_endless_runner_game_1791389877494.jpg';
import contentCreationImg from '../assets/images/content_creation_studio_1791389889389.jpg';

export type ProjectCategory =
  | 'All'
  | 'Web Development'
  | 'Game Development'
  | 'AI & Technology'
  | 'Education'
  | 'Content Creation';

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  category: Exclude<ProjectCategory, 'All'>;
  secondaryCategories?: Exclude<ProjectCategory, 'All'>[];
  displayCategoryLabel: string;
  technologies: string[];
  status: 'Live' | 'In Development' | 'Private Project';
  image: string;
  imageAlt: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  isGame?: boolean;
  features: string[];
  developmentInfo: string;
  disclaimer?: string;
}

export interface EducationItem {
  id: string;
  level: string;
  institution: string;
  boardOrUniversity?: string;
  period: string;
  status: 'Completed' | 'Currently Pursuing';
  marks?: string;
  percentage?: string;
  stream?: string;
  subjects?: string[];
  details: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  focusAreas: string[];
  verificationStatus: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: 'Suraj Maurya',
    creatorName: '5tar Suraj',
    githubUsername: '879591',
    location: 'Rudhauli, Basti, Uttar Pradesh, India',
    professionalIdentity: 'Student & Independent Developer',
    headline: 'Web & Game Developer | AI & Technology Enthusiast',
    heroIntroduction:
      'I am a student and independent developer interested in web development, game development, AI tools and digital technology. I enjoy learning through practical projects and turning ideas into useful digital experiences.',
    secondaryAreas: [
      'Content Creation',
      'AI Tools',
      'Digital Technology',
      'Web Development',
      'Game Development',
    ],
    // Leave empty to use the clean professional initials placeholder (with custom photo upload option)
    defaultProfilePhotoUrl: '',
  },

  contact: {
    phone: '9792006815',
    phoneFormatted: '+91 97920 06815',
    whatsappUrl: 'https://wa.me/919792006815',
    email: 'miss359010@gmail.com',
    mailtoUrl: 'mailto:miss359010@gmail.com',
    location: 'Rudhauli, Basti, Uttar Pradesh, India',
  },

  socials: {
    github: 'https://github.com/879591',
    instagram: 'https://www.instagram.com/5tar.suraj?stkn=OWZjNXhyb2toanZk',
    facebook: 'https://www.facebook.com/share/1FDbbX2rcH/',
    // Only add YouTube or LinkedIn when a verified URL is ready:
    youtube: '',
    linkedin: '',
  },

  githubProfile: {
    username: '879591',
    displayName: 'Suraj maurya',
    profileUrl: 'https://github.com/879591',
    bio: 'Student & Independent Developer | Web Development • Game Development • AI & Technology',
    ctaText: 'View My GitHub',
    fallbackNote: 'Explore my projects on GitHub',
  },

  about: {
    lead: 'An independent student developer based in Rudhauli, Basti, Uttar Pradesh, focused on learning modern web engineering, browser-based game development, and practical AI workflows.',
    paragraphs: [
      'My journey in technology is driven by curiosity and hands-on experimentation. As a Bachelor of Arts (B.A.) student at Siddharth University and an independent learner, I spend my time exploring how web interfaces, interactive browser games, and modern AI tools work together to solve everyday problems.',
      'Rather than relying solely on theory, I learn by building practical projects—from student-focused educational platform concepts like 5tarResult and digital presence websites to playable browser-based endless runner games. Every project helps me strengthen my grasp of HTML, CSS, JavaScript, React, and responsive layout design.',
      'Alongside coding, I actively explore AI-assisted and prompt-based development workflows, digital design, and social media content creation under the creator identity 5tar Suraj. I am eager to collaborate on entry-level web projects, freelance opportunities, AI/data-training initiatives, and developer learning roles.',
    ],
    highlights: [
      {
        label: 'Academic Path',
        value: 'B.A. 1st Year Student (Siddharth University)',
      },
      {
        label: 'Core Focus',
        value: 'Web Development, Browser Games & AI Workflows',
      },
      {
        label: 'Learning Approach',
        value: 'Project-Based Practical Execution',
      },
      {
        label: 'Creator Identity',
        value: '5tar Suraj',
      },
    ],
  },

  professionalProfile: {
    title: 'Professional Profile',
    summary:
      'A disciplined student and independent developer combining foundational frontend web skills, interactive browser game prototyping, AI-assisted workflows, and digital media creation.',
    pillars: [
      {
        index: '01',
        title: 'Student & Self-Directed Learner',
        description:
          'Balancing university studies with dedicated daily practice in programming, software tools, and digital literacy.',
      },
      {
        index: '02',
        title: 'Independent Web & Game Builder',
        description:
          'Building responsive web interfaces with HTML, CSS, JavaScript, React, and Vite alongside playable browser game prototypes.',
      },
      {
        index: '03',
        title: 'AI & Technology Enthusiast',
        description:
          'Applying modern AI tools and structured prompt workflows to accelerate code experimentation, research, and problem solving.',
      },
      {
        index: '04',
        title: 'Digital Content Creator',
        description:
          'Producing engaging visual media, video edits, and educational/tech social content with clean design principles.',
      },
    ],
  },

  education: [
    {
      id: 'ba-siddharth-uni',
      level: 'Higher Education — B.A. (1st Year)',
      institution: 'Siddharth University',
      boardOrUniversity: 'Siddharth University',
      period: 'Ongoing',
      status: 'Currently Pursuing',
      subjects: ['Geography', 'Economics', 'Sanskrit'],
      details:
        'Currently pursuing Bachelor of Arts (1st Year) with coursework in Geography, Economics, and Sanskrit while independently building web and game development projects.',
    },
    {
      id: 'intermediate-2026',
      level: 'Intermediate (Class 12)',
      institution: 'Dileshwari Inter College, Rudhauli, Basti',
      boardOrUniversity: 'UP Board',
      period: '2026',
      status: 'Completed',
      marks: '349 / 500',
      percentage: '69.8%',
      stream: 'Humanities / Arts',
      details:
        'Completed Intermediate education in the Humanities / Arts stream at Dileshwari Inter College, Rudhauli, Basti.',
    },
    {
      id: 'high-school-2024',
      level: 'High School (Class 10)',
      institution: 'Dileshwari Inter College, Rudhauli, Basti',
      boardOrUniversity: 'UP Board',
      period: '2024',
      status: 'Completed',
      marks: '455 / 600',
      percentage: '75.83%',
      details:
        'Completed High School examination under the Uttar Pradesh Board at Dileshwari Inter College with 455 out of 600 marks.',
    },
    {
      id: 'classes-6-to-12',
      level: 'Secondary & Senior Secondary Schooling (Classes 6–12)',
      institution: 'Dileshwari Inter College, Rudhauli, Basti',
      period: 'Classes 6–12',
      status: 'Completed',
      details:
        'Completed middle, secondary, and senior secondary schooling from Class 6 through Class 12 in Rudhauli, Basti.',
    },
    {
      id: 'classes-1-to-5',
      level: 'Primary Schooling (Classes 1–5)',
      institution: 'Bakhariya Village Primary School',
      period: 'Classes 1–5',
      status: 'Completed',
      details:
        'Completed foundational primary education (Classes 1 to 5) at Bakhariya village primary school.',
    },
  ] as EducationItem[],

  skills: [
    {
      category: 'Web Development',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Vite',
        'Responsive Web Design',
      ],
    },
    {
      category: 'Game Development',
      items: [
        'Browser Game Development',
        'Game Logic',
        'Game UI',
        'Interactive Web Experiences',
      ],
    },
    {
      category: 'AI & Technology',
      items: [
        'AI Tools',
        'AI-assisted Development',
        'Prompt-based Development',
        'Technology Research',
      ],
    },
    {
      category: 'Content & Digital Media',
      items: [
        'Content Creation',
        'Video Editing',
        'Social Media Management',
        'Canva',
        'Digital Design',
      ],
    },
    {
      category: 'Data / Computer',
      items: ['Basic Coding', 'Basic Data Analysis'],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: '5tar-result',
      name: '5tarResult',
      tagline: 'Jobs, Exams & Study',
      shortDescription:
        'A student-focused education platform concept for jobs, exams, study resources and competitive-exam preparation.',
      overview:
        '5tarResult is an independent education web platform concept designed to organize job alerts, examination updates, study materials, and competitive-exam preparation resources in a clean, student-friendly layout.',
      category: 'Education',
      secondaryCategories: ['Web Development'],
      displayCategoryLabel: 'Education / Web Platform',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
      status: 'In Development',
      image: project5tarResultImg,
      imageAlt: '5tarResult student education platform interface concept',
      githubUrl: 'https://github.com/879591',
      features: [
        'Structured sections for competitive exam notifications and job updates',
        'Student-centric layout focused on readability and fast navigation',
        'Organized study resource and preparation material categories',
        'Mobile-responsive web design for students accessing via smartphones',
      ],
      developmentInfo:
        'Concept and frontend structure in active development by Suraj Maurya. Live deployment URL can be linked in configuration once public hosting is finalized.',
    },
    {
      id: 'online-website-service',
      name: 'Online Website Service',
      tagline: 'Digital Solutions & Web Presence',
      shortDescription:
        'A web-service project focused on helping businesses establish an online presence through websites and digital solutions.',
      overview:
        'Online Website Service is a web development and digital service showcase built to present clear website packages, responsive landing page layouts, and practical digital solutions for local businesses and individuals looking to get online.',
      category: 'Web Development',
      secondaryCategories: ['AI & Technology'],
      displayCategoryLabel: 'Web Development / Digital Services',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Web Design'],
      status: 'In Development',
      image: projectOnlineWebImg,
      imageAlt: 'Online Website Service digital solutions showcase',
      githubUrl: 'https://github.com/879591',
      features: [
        'Clean service presentation for business websites and landing pages',
        'Responsive multi-device layout built for fast loading',
        'Clear inquiry and contact call-to-action workflows',
        'Modular frontend sections adaptable for small business needs',
      ],
      developmentInfo:
        'Developed as an independent web-service initiative. Additional live client or demo links can be added directly via the portfolio configuration file.',
    },
    {
      id: 'browser-endless-runner-game',
      name: 'Browser Endless Runner Game',
      tagline: 'Independent Browser Endless-Runner Game Project',
      shortDescription:
        'An independent browser game development project featuring endless-runner movement, obstacle dodging, and interactive game UI.',
      overview:
        'An independent browser endless-runner game project built for the web. Players navigate an endless track, dodge oncoming obstacles, and test their reflexes directly in the browser without installing external software.',
      category: 'Game Development',
      secondaryCategories: ['Web Development'],
      displayCategoryLabel: 'Game Development',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Browser Game Development',
        'Game Logic',
        'Game UI',
      ],
      status: 'Live',
      image: projectEndlessRunnerImg,
      imageAlt: 'Independent browser endless-runner game project preview',
      liveDemoUrl: 'https://subway-surfers-game-swart.vercel.app/',
      githubUrl: 'https://github.com/879591',
      isGame: true,
      features: [
        'Playable directly in modern desktop and mobile web browsers',
        'Real-time lane switching, collision detection, and endless runner game logic',
        'Interactive score tracking and responsive in-game user interface',
        'Hosted live on Vercel for instant browser access',
      ],
      developmentInfo:
        'Deployed and playable online. Created as a practical learning project exploring browser game mechanics, animation loops, and interactive UI state.',
      disclaimer:
        'Independent browser endless-runner game project created for educational and portfolio demonstration purposes. Not affiliated with or representing the official Subway Surfers game.',
    },
  ] as ProjectItem[],

  contentCreation: {
    title: 'Content Creation & Digital Media',
    subtitle: 'Visual Storytelling, Video Editing & AI-Assisted Workflows',
    description:
      'Alongside web and game development, I create digital content under the name 5tar Suraj. My focus is on combining clean video editing, Canva graphic design, and AI tools to produce informative and engaging social media content.',
    image: contentCreationImg,
    imageAlt: 'Digital content creation and video editing workspace',
    areas: [
      {
        title: 'Video Editing & Short-Form Media',
        description:
          'Editing crisp social media videos, pacing visual transitions, and structuring engaging narratives for digital platforms.',
      },
      {
        title: 'AI-Assisted Content Workflows',
        description:
          'Exploring modern AI tools for ideation, script structuring, prompt-based asset refinement, and productivity.',
      },
      {
        title: 'Visual Design & Branding (Canva)',
        description:
          'Designing clean thumbnails, social graphics, and layout compositions using Canva and digital design tools.',
      },
      {
        title: 'Social Media Management',
        description:
          'Maintaining creator profiles on Instagram and Facebook with consistent visual quality and audience connection.',
      },
    ],
  },

  certifications: [
    {
      id: 'be10x-ai-tools',
      title: 'AI Tools & ChatGPT Workshop',
      issuer: 'be10X',
      focusAreas: [
        'AI Tools',
        'Prompt-based Workflows',
        'AI-assisted Productivity',
        'Practical ChatGPT Applications',
      ],
      verificationStatus: 'Included in Resume',
    },
  ] as CertificateItem[],

  resume: {
    title: 'My Resume',
    description: 'View or download my latest resume.',
    // If you place a custom PDF file in /public/resume.pdf, set customPdfUrl: '/resume.pdf'
    customPdfUrl: '',
    lastUpdated: '2026',
  },
};
