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
      title: "WAYLINE",
      subtitle: "Smart Urban Transit & Live Tracking Web App",
      description: "A real-time transit tracking and route optimization web application that simplifies chaotic public transit schedules into a seamless, tap-and-go digital journey.",
      category: "Fullstack",
      date: "MAR 15, 2024",
      role: "Lead Fullstack Engineer",
      timeline: "4 Months",
      team: "3 Engineers, 1 Designer",
      tags: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Mapbox GL", "PostgreSQL"],
      metrics: [
        { label: "FASTER ROUTE QUERY", value: "47%", color: "blue" },
        { label: "API LATENCY REDUCTION", value: "-55%", color: "pink" },
        { label: "ACTIVE DAILY USERS", value: "12K+", color: "green" }
      ],
      featuredImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80",
      secondaryImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com/wayline-demo",
      githubUrl: "https://github.com/example/wayline",
      highlights: [
        "Built WebSocket live bus tracking engine handling 500+ updates/sec.",
        "Implemented offline-first Progressive Web App (PWA) with client-side caching.",
        "Engineered intelligent pathfinding algorithm reducing commuter wait times."
      ]
    },
    {
      id: "project-2",
      tabLabel: "PROJECT #2",
      title: "TANDEM",
      subtitle: "Collaborative Developer Workspace & Code Snippets",
      description: "A developer-first synchronous workspace with live pair-programming terminals, syntax-highlighted scratchpads, and instant GitHub gist sync.",
      category: "Web App",
      date: "JAN 5, 2024",
      role: "Frontend Architect",
      timeline: "3 Months",
      team: "Solo Project",
      tags: ["React", "Next.js", "Monaco Editor", "Tailwind CSS", "Redis", "Docker"],
      metrics: [
        { label: "LIGHTHOUSE SCORE", value: "99/100", color: "yellow" },
        { label: "BUNDLE SIZE", value: "78 KB", color: "green" },
        { label: "COMMUNITY STARS", value: "450+", color: "blue" }
      ],
      featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      secondaryImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com/tandem-demo",
      githubUrl: "https://github.com/example/tandem",
      highlights: [
        "Integrated Microsoft Monaco editor with customized retro syntax themes.",
        "Optimized Web Workers for running in-browser JavaScript evaluation securely.",
        "Zero latency state synchronization powered by WebRTC."
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
