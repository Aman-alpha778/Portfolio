import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  figma,
  threejs,
  user1,
  user2,
  user3,
  linkedin,
  github,
  after,
  photoshop,
  illustrator,
  indesign,
  blender,
  corel,
  Home,
  landing,
  back,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../assets";

export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

export const SERVICES = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "3D animator",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
] as const;

export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Indesign",
    icon: indesign,
  },
  {
    name: "CorelDraw",
    icon: corel,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "After Effects",
    icon: after,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
] as const;

export const EXPERIENCES = [
  {
    title: "Graphic Designer",
    company_name: "Sortiqsolutions pvt. ltd.",
    icon: backend,
    iconBg: "#383E56",
    date: "5 January 2024 - Present",
    points: [
      "Designed creative visuals for branding, social media, and marketing campaigns, ensuring consistency with the company's identity.",
      "Collaborated with team members and clients to understand requirements and deliver high-quality design solutions.",
      "Managed multiple projects efficiently, meeting deadlines while maintaining attention to detail and creativity.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Sortiqsolutions pvt. ltd.",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "5 January 2024 - Present",
    points: [
      "Designed intuitive and user-friendly interfaces with a focus on usability and clean layouts.",
      "Created wireframes, prototypes, and improved user experience through research and feedback.",
    ],
  },
  {
    title: "Video Editor/3D Animator",
    company_name: "Sortiqsolutions pvt. ltd.",
    icon: after,
    iconBg: "#383E56",
    date: "5 January 2024 - Present",
    points: [
      "Edited and produced high-quality videos using creative transitions, effects, and storytelling techniques.",
      "Managed projects from raw footage to final output, ensuring engaging and polished content.",
      "Created realistic and engaging 3D animations, models, and visual scenes while working with tools like Blender and Spline.",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

export type ProjectTag = {
  name: string;
  color: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  image: string;
  tags: ProjectTag[];
};

export type ProjectCategory = {
  slug: "ui-ux" | "graphic-design" | "animation-motion";
  title: string;
  shortTitle: string;
  description: string;
  image: string;
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    description:
      "Explore interface concepts, dashboard systems, landing pages, and product flows focused on clarity and usability.",
    image: Home,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    description:
      "Browse branding, campaign visuals, posters, and editorial layouts crafted for bold visual communication.",
    image: photoshop,
  },
  {
    slug: "animation-motion",
    title: "3D Animation and Video Editing/Motion Graphics",
    shortTitle: "3D Animation and Motion Graphics",
    description:
      "See motion-led work including video edits, 3D scenes, title animations, and promo-ready visual storytelling.",
    image: back,
  },
];

export const CATEGORY_PROJECTS: Record<ProjectCategory["slug"], ProjectItem[]> = {
  "ui-ux": [
    {
      name: "FinFlow Dashboard",
      description:
        "A dummy finance dashboard concept with clean data hierarchy, onboarding screens, and mobile companion views.",
      image: Home,
      tags: [
        { name: "dashboard", color: "blue-text-gradient" },
        { name: "wireframe", color: "green-text-gradient" },
      ],
    },
    {
      name: "Travel App Prototype",
      description:
        "A placeholder mobile app case study showing destination discovery, booking flows, and itinerary planning.",
      image: landing,
      tags: [
        { name: "mobile", color: "pink-text-gradient" },
        { name: "prototype", color: "blue-text-gradient" },
      ],
    },
    {
      name: "SaaS Landing Experience",
      description:
        "A sample landing page project with hero storytelling, feature sections, and conversion-focused layouts.",
      image: project1,
      tags: [
        { name: "landing-page", color: "green-text-gradient" },
        { name: "conversion", color: "pink-text-gradient" },
      ],
    },
    {
      name: "Wellness Booking Flow",
      description:
        "A dummy appointment and booking journey focused on calming visuals, service selection, and checkout clarity.",
      image: project3,
      tags: [
        { name: "app-flow", color: "blue-text-gradient" },
        { name: "booking", color: "green-text-gradient" },
      ],
    },
    {
      name: "Creator Portfolio Wireframe",
      description:
        "A placeholder case study for a portfolio experience with modular sections, transitions, and lightweight navigation.",
      image: project4,
      tags: [
        { name: "portfolio", color: "pink-text-gradient" },
        { name: "ux", color: "blue-text-gradient" },
      ],
    },
    {
      name: "Analytics Workspace",
      description:
        "A sample workspace concept showing dense tables, charts, panel navigation, and a polished dark dashboard system.",
      image: project5,
      tags: [
        { name: "analytics", color: "green-text-gradient" },
        { name: "saas", color: "pink-text-gradient" },
      ],
    },
  ],
  "graphic-design": [
    {
      name: "Brand Identity Set",
      description:
        "A placeholder branding package featuring logo directions, business stationery, and social identity templates.",
      image: photoshop,
      tags: [
        { name: "branding", color: "blue-text-gradient" },
        { name: "identity", color: "pink-text-gradient" },
      ],
    },
    {
      name: "Campaign Poster Series",
      description:
        "Dummy promotional poster concepts designed for product launches, seasonal campaigns, and event marketing.",
      image: illustrator,
      tags: [
        { name: "print", color: "green-text-gradient" },
        { name: "campaign", color: "blue-text-gradient" },
      ],
    },
    {
      name: "Editorial Layout Collection",
      description:
        "Sample brochure and magazine spread work showing typography systems, grid structure, and cover design.",
      image: indesign,
      tags: [
        { name: "editorial", color: "pink-text-gradient" },
        { name: "layout", color: "green-text-gradient" },
      ],
    },
    {
      name: "Social Media Launch Kit",
      description:
        "A dummy campaign pack with post templates, story frames, ad creatives, and launch-week visual consistency.",
      image: project6,
      tags: [
        { name: "social", color: "blue-text-gradient" },
        { name: "campaign-kit", color: "pink-text-gradient" },
      ],
    },
    {
      name: "Packaging Concept Sheet",
      description:
        "A placeholder packaging direction featuring label systems, product mockups, and shelf-ready presentation boards.",
      image: corel,
      tags: [
        { name: "packaging", color: "green-text-gradient" },
        { name: "mockup", color: "blue-text-gradient" },
      ],
    },
    {
      name: "Event Collateral System",
      description:
        "Sample ticket, standee, banner, and invite designs built as a cohesive event identity suite.",
      image: photoshop,
      tags: [
        { name: "event", color: "pink-text-gradient" },
        { name: "print-design", color: "green-text-gradient" },
      ],
    },
  ],
  "animation-motion": [
    {
      name: "Product Promo Reel",
      description:
        "A dummy motion piece combining edited footage, title cards, transitions, and end-card messaging.",
      image: after,
      tags: [
        { name: "video-editing", color: "blue-text-gradient" },
        { name: "promo", color: "pink-text-gradient" },
      ],
    },
    {
      name: "3D Brand Reveal",
      description:
        "A placeholder 3D animation concept with lighting tests, camera moves, and logo reveal timing studies.",
      image: back,
      tags: [
        { name: "3d", color: "green-text-gradient" },
        { name: "animation", color: "blue-text-gradient" },
      ],
    },
    {
      name: "Motion Graphics Explainer",
      description:
        "A sample explainer storyboard using icon animation, lower-thirds, and kinetic typography sequences.",
      image: project2,
      tags: [
        { name: "motion-graphics", color: "pink-text-gradient" },
        { name: "storyboard", color: "green-text-gradient" },
      ],
    },
    {
      name: "Title Sequence Concept",
      description:
        "A dummy title sequence with typographic timing, atmosphere frames, and cinematic pacing notes for an intro sting.",
      image: project1,
      tags: [
        { name: "title-design", color: "blue-text-gradient" },
        { name: "cinematic", color: "pink-text-gradient" },
      ],
    },
    {
      name: "Music Visualizer Frames",
      description:
        "A sample audio-reactive direction blending abstract motion, color pulses, and layered compositions.",
      image: project2,
      tags: [
        { name: "visualizer", color: "green-text-gradient" },
        { name: "loop", color: "blue-text-gradient" },
      ],
    },
    {
      name: "Exploded 3D Product Shot",
      description:
        "A placeholder animation showing a product breakdown with staged lighting, camera motion, and material emphasis.",
      image: blender,
      tags: [
        { name: "product-shot", color: "pink-text-gradient" },
        { name: "render", color: "green-text-gradient" },
      ],
    },
  ],
};

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shivam-choudhary-28a019346",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Shivamch0",
  },
] as const;
