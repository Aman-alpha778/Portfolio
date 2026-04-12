
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  Home,
  landing,
    after,
    photoshop,
    illustrator,
    indesign,
    blender,
    corel,
    back
} from "../assets";

// Navbar Links
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
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/sanidhyy/3d-portfolio",
  // },
] as const;

// Services
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

// Technologies
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Graphic Designer",
    company_name: "Sortiqsolutions pvt. ltd.",
    icon: backend,
    iconBg: "#383E56",
    date: "5 January 2024 - Present",
    points: [
      "Designed creative visuals for branding, social media, and marketing campaigns, ensuring consistency with the company’s identity.",
      "Collaborated with team members and clients to understand requirements and deliver high-quality design solutions.",
      "Managed multiple projects efficiently, meeting deadlines while maintaining attention to detail and creativity.",

    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Sortiqsolutions pvt. ltd.",
    icon: reactjs,
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
    icon: nodejs,
    iconBg: "#383E56",
    date: "5 January 2024 - Present",
    points: [
      "Edited and produced high-quality videos using creative transitions, effects, and storytelling techniques.\n" +
      "Managed projects from raw footage to final output, ensuring engaging and polished content",
      "Created realistic and engaging 3D animations, models, and visual scenes.\n" +
      "Worked with tools like Blender and Spline to bring concepts to life through motion and design.",

    ],
  },
] as const;

// Testimonials
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

// Projects
export const PROJECTS = [
  {
    name: "Hero Banner",
    description:
      "A real-time chat application with AI-powered emotion tracking (Positive/Neutral/Negative), secure authentication, and scalable cloud deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:back,
    source_code_link: "",
    live_site_link: "https://sentrachat.netlify.app",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app",
  },
  // {
  //   name: "Shoppy",
  //   description:
  //     "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "syncfusion",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/sanidhyy/admin-dashboard",
  //   live_site_link: "https://shoppy-dashboard-react.netlify.app",
  // },
  // {
  //   name: "TikTok Clone",
  //   description:
  //     "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project4,
  //   source_code_link: "https://github.com/sanidhyy/tiktok-clone",
  //   live_site_link: "https://tiktok-clone-react.vercel.app",
  // },
  {
    name: "CEMS",
    description:
      "A full-stack web application designed to manage campus events efficiently with role-based access, real-time updates, and data analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeMailer",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://react-cems.netlify.app",
  },
  // {
  //   name: "Travel Advisor",
  //   description:
  //     "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "material-ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project6,
  //   source_code_link: "https://github.com/sanidhyy/travel-advisor",
  //   live_site_link: "https://travel-advisor-reactjs.netlify.app",
  // },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@OPGAMER.",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shivam-choudhary-28a019346",
  },
  // {
  //   name: "Twitter",
  //   icon: twitter,
  //   link: "https://x.com/_sanidhyy",
  // },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Shivamch0",
    
  },
] as const;
