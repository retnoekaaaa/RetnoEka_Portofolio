export interface ProjectMetric {
  label: string;
  value: string;
  color?: "yellow" | "blue" | "pink" | "green" | "purple";
}

export interface Project {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Web App" | "Mobile App" | "Backend/API" | "Fullstack" | "Frontend" | "Open Source";
  date: string;
  role: string;
  timeline: string;
  team: string;
  tags: string[];
  metrics: ProjectMetric[];
  featuredImage?: string;
  secondaryImage?: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  color: "yellow" | "blue" | "pink" | "green" | "purple" | "orange";
  skills: string[];
}

export interface FunExperiment {
  id: string;
  title: string;
  tag: string;
  description: string;
  link?: string;
  badgeColor?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  iconName: "github" | "linkedin" | "instagram" | "twitter" | "mail" | "globe";
}

export interface PortfolioData {
  personal: {
    nickname: string;
    fullName: string;
    role: string;
    tagline: string;
    subTagline: string;
    bioParagraphs: string[];
    location: string;
    statusBadge: string;
    availability: string;
    avatarUrl: string;
    resumeUrl: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experiments: FunExperiment[];
  socials: SocialLink[];
}
