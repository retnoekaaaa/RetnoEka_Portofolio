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
      title: "FORGE",
      subtitle: "High-Performance Cloud Metric & Server Monitor",
      description: "Lightweight, beautiful monitoring dashboard for container clusters and microservices with automated anomaly alerts and discord webhooks.",
      category: "Backend/API",
      date: "NOV 20, 2023",
      role: "Backend & Cloud Engineer",
      timeline: "2 Months",
      team: "2 Engineers",
      tags: ["Go", "FastAPI", "InfluxDB", "Grafana", "Docker", "Prometheus"],
      metrics: [
        { label: "MEMORY CONSUMPTION", value: "< 25MB", color: "pink" },
        { label: "QUERY TIME", value: "1.8ms", color: "yellow" },
        { label: "UPTIME ACCURACY", value: "99.99%", color: "green" }
      ],
      featuredImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
      secondaryImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com/forge-demo",
      githubUrl: "https://github.com/example/forge",
      highlights: [
        "Designed time-series metric aggregation pipeline in Go.",
        "Built dynamic anomaly detection rule engine with configurable alert webhooks.",
        "Low memory agent daemon packaged as a 12MB static Docker container."
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
