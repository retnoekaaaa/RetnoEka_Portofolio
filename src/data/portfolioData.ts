import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    nickname: "RETNO EKA",
    fullName: "Retno Eka Triatry",
    role: "Fullstack Developer",
    tagline: "Building applications from idea into ready-to-use digital products.",
    subTagline: "I focus on well-structured systems, seamless user experiences, and purposeful solutions that genuinely address real needs.",
    bioParagraphs: [
      "I am a Full-stack Developer who loves building things from the ground up—starting from a raw idea, shaping it into solid design and architecture, all the way to a product that people can actually use.",
      "I genuinely enjoy the process of working across every layer of a project: database design, backend systems, APIs, and intuitive frontends. I pay keen attention to detail, especially in ensuring that an application stays cleanly organized under the hood while remaining comfortable, delightful, and effortless for users."
    ],
    location: "Jakarta, Indonesia",
    statusBadge: "OPEN TO WORK & INNOVATION",
    availability: "Available for Projects & Academy Collaboration",
    avatarUrl: "",
    resumeUrl: "#contact"
  },

  skills: [
    {
      title: "Core Stack & Frontend",
      color: "yellow",
      skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Responsive Design", "State Management"]
    },
    {
      title: "Backend & Systems",
      color: "green",
      skills: ["Laravel / PHP", "Golang", "Node.js", "RESTful APIs", "System Architecture", "Authentication & Security"]
    },
    {
      title: "Database & Cloud",
      color: "blue",
      skills: ["MySQL", "PostgreSQL", "Docker", "Git & GitHub", "Prisma ORM"]
    },
    {
      title: "Design & Tools",
      color: "pink",
      skills: ["Figma UI/UX", "VS Code", "Prototyping", "Wireframing", "Design Systems", "User Flow Testing"]
    }
  ],

  projects: [
    {
      id: "project-1",
      tabLabel: "PROJECT #1",
      title: "ALUMNI HUB",
      subtitle: "Centralized Community & Career Portal for Alumni & Guests",
      description: "Developed during an industrial internship (PKL) as a collaborative group project. AlumniHub connects graduates, students, and guests through an integrated platform. I held primary ownership of the Alumni module (community feed, event hosting, and learning resources) and the public Guest portal (alumni directory, verification, and FAQ).",
      category: "Fullstack",
      date: "JAN – MAR 2026",
      role: "Alumni & Guest Role Lead",
      timeline: "3 Months (Jan – Mar 2026)",
      team: "Group Project (PKL Internship)",
      tags: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Recharts", "RBAC"],
      metrics: [],
      featuredImage: "/images/projects/alumnihub-main.png",
      secondaryImage: "/images/projects/alumnihub-preview.jpg",
      githubUrl: "https://github.com/syahlasandiani/pkl-alumnihub.git",
      highlights: [
        "Group Project (PKL): Built collaboratively using Git feature branches and code reviews.",
        "Alumni Module: Developed interactive community posts, event management, and resource downloads.",
        "Guest Module: Designed public alumni directory, institutional FAQs, and student verification.",
        "Architecture: Integrated Supabase (PostgreSQL, Auth & Storage) with Next.js App Router and Server Actions."
      ]
    },
    {
      id: "project-2",
      tabLabel: "PROJECT #2",
      title: "SHOES4US",
      subtitle: "Modern Footwear E-Commerce & Order Tracking Platform",
      description: "Developed as a collaborative academic group project for the Platform-Based Development (PBP) course at Universitas Diponegoro. Shoes4Us delivers an intuitive online footwear shopping experience with catalog filtering, real-time cart state, and order lifecycle tracking. I served as the Frontend Developer, engineering the application layout and the order status tracking interface.",
      category: "Frontend",
      date: "OCT 2025",
      role: "Frontend Developer",
      timeline: "October 2025",
      team: "Group Project (PBP Course)",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "React 18", "Lucide React", "React Hot Toast"],
      metrics: [],
      featuredImage: "/images/projects/shoes4us-main.jpg",
      secondaryImage: "/images/projects/shoes4us-logo.jpg",
      githubUrl: "https://github.com/Ranggadya/E-Commerce.git",
      highlights: [
        "Academic Group Project: Collaborated with a 5-member student engineering team for Platform-Based Development (PBP).",
        "Core Layout & Providers: Architected root layout with AuthProvider, CartProvider, Toast notifications, and global error boundaries.",
        "Order Lifecycle Tracking: Implemented real-time order status tracking interface (/status-pesanan) with dynamic order state badges.",
        "Responsive Storefront: Structured homepage with hero promotional carousels, category showcases, and product grid components."
      ]
    },
    {
      id: "project-3",
      tabLabel: "PROJECT #3",
      title: "CEKIMARKET",
      subtitle: "Multi-Role Online Marketplace & Seller Analytics Platform",
      description: "Developed as a collaborative academic project for the Software Engineering Project (PPL - Proyek Perangkat Lunak) course. CekiMarket connects buyers, verified sellers, and platform administrators within an integrated e-commerce ecosystem. I led backend development, designing the database schema, business logic, authorization rules, and automated PDF reporting services.",
      category: "Backend/API",
      date: "AUG 2025",
      role: "Backend Developer",
      timeline: "August 2025",
      team: "Group Project (PPL Course)",
      tags: ["Laravel 12", "PHP 8.2+", "MySQL", "Inertia.js", "React 18", "Tailwind CSS", "DomPDF", "Sanctum"],
      metrics: [],
      featuredImage: "/images/projects/cekimarket-main.jpg",
      secondaryImage: "/images/projects/cekimarket-promo1.png",
      githubUrl: "https://github.com/rafihendiansyah/CekiMarket.git",
      highlights: [
        "Academic Group Project: Built collaboratively for the Software Engineering Project (PPL) course following formal SRS specifications.",
        "Data Modeling & Architecture: Engineered relational MySQL migrations for users, multi-role permissions, product inventories, and reviews.",
        "Multi-Role RBAC Logic: Implemented authorization controllers handling seller registration verification, catalog moderation, and admin workflows.",
        "Automated Reporting: Developed dynamic PDF generation endpoints using DomPDF for seller stock analysis, rating distributions, and restock alerts."
      ]
    },
    {
      id: "project-4",
      tabLabel: "PROJECT #4",
      title: "BIOPORI KEDUNGBANJAR",
      subtitle: "Interactive Community Education & Organic Waste Calculator Platform",
      description: "Engineered as a solo digital initiative during the university community service program (KKN) in Desa Kedungbanjar. The platform empowers rural residents to learn, build, and maintain Biopore Infiltration Holes (Lubang Resapan Biopori) to curb household organic waste, enrich soil fertility, and reduce localized flood risks through an engaging, accessible web application.",
      category: "Web App",
      date: "JUL 2026",
      role: "Sole Developer & Designer",
      timeline: "July 2026",
      team: "Solo Project (KKN Community Service)",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React", "Interactive Calculators"],
      metrics: [],
      featuredImage: "/images/projects/biopori-main.jpg",
      secondaryImage: "/images/projects/biopori-logo.png",
      githubUrl: "https://github.com/retnoekaaaa/KKN_Kedungbanjar26_Biopori.git",
      highlights: [
        "Solo University Community Project (KKN): Independently conceptualized, designed, and developed for the community of Desa Kedungbanjar.",
        "Interactive Organic Waste Calculator: Implemented a dynamic client-side calculator estimating household organic waste and compost yield.",
        "Visual Ground & Absorption Simulation: Developed animated cross-section graphics representing soil layers and rainwater infiltration using Framer Motion.",
        "Community-Centric Accessibility: Built step-by-step DIY installation guides, waste categorization (Dos & Don'ts), and maintenance harvesting schedules."
      ]
    }
  ],

  experiments: [
    {
      id: "exp-1",
      title: "Pixel Font Rasterizer",
      tag: "Canvas / Math",
      description: "Interactive 8-bit glyph generator converting text to retro dot-matrix pixel sprites in real time.",
      badgeColor: "#FDE047"
    },
    {
      id: "exp-2",
      title: "Macintosh 128k Emulator UI",
      tag: "Retro UI",
      description: "CSS-only reproduction of classic System 1.0 desktop with draggable trash can and alert modals.",
      badgeColor: "#93C5FD"
    },
    {
      id: "exp-3",
      title: "CLI Portfolio Terminal",
      tag: "Web Shell",
      description: "A lightweight terminal shell running in the browser with bash autocomplete and hidden easter eggs.",
      badgeColor: "#86EFAC"
    },
    {
      id: "exp-4",
      title: "Algorithmic Washi Tape",
      tag: "SVG Generative",
      description: "Randomized ripped paper edge generator using Perlin noise shaders.",
      badgeColor: "#F472B6"
    }
  ],

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com",
      handle: "@eka-dev",
      iconName: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      handle: "Eka Wardana",
      iconName: "linkedin"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com",
      handle: "@eka.codes",
      iconName: "instagram"
    },
    {
      platform: "Email",
      url: "mailto:eka.contact@example.com",
      handle: "eka.contact@example.com",
      iconName: "mail"
    }
  ]
};
