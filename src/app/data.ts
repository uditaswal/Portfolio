/**
 * All site content lives in this file. Components only render what is here,
 * so day-to-day edits (a new project, a new job, a new certificate) never
 * need to touch a component.
 *
 * Contents
 *   1. profile       name, role, contact links
 *   2. sections      what appears in the top nav and the command palette
 *   3. experience    jobs, each with one or more roles
 *   4. projects      project cards
 *   5. skills        tech stack chips (icons live in /public/logo)
 *   6. education     degrees and schooling
 *   7. certificates  and honors: the two scrolling rows (images in /public/certificates)
 */

/* -------------------------------------------------------------------------- */
/* 1. Profile                                                                 */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Udit Aswal",
  role: "Lead Engineer",
  company: "HCLTech",
  companyUrl: "https://www.hcltech.com/",
  email: "udit.aswal37@gmail.com",
  github: "https://www.github.com/uditaswal",
  linkedin: "https://www.linkedin.com/in/uditaswal",
  /** File in /public, served as a download. */
  resume: "/Udit_Resume.pdf",
};

/* -------------------------------------------------------------------------- */
/* 2. Sections                                                                */
/* -------------------------------------------------------------------------- */

/**
 * `id` must match the `id` passed to <Section id="..."> in the matching
 * component. Order here is the order of the nav links.
 */
export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

/* -------------------------------------------------------------------------- */
/* 3. Experience                                                              */
/* -------------------------------------------------------------------------- */

export type Role = {
  title: string;
  /** e.g. "Full-time", "Internship", "Apprenticeship". */
  type: string;
  /** Display text, e.g. "Oct 2025 - Present". */
  period: string;
  /** Optional length of the role, e.g. "3 yrs 3 mos". Leave out for a current role so it never goes stale. */
  duration?: string;
  /** e.g. "On-site", "Remote". */
  mode?: string;
  /** Short achievement bullets. Optional. */
  points?: string[];
  /** Skill chips shown under the role. */
  skills?: string[];
};

export type Job = {
  company: string;
  /** Two or three letters shown in the logo square. */
  logo: string;
  location?: string;
  /** Total time at the company, shown next to the name. */
  tenure?: string;
  /** Newest role first. They render as a vertical timeline. */
  roles: Role[];
};

export const experience: Job[] = [
  {
    company: "HCLTech",
    logo: "HCL",
    location: "Noida, Uttar Pradesh, India",
    tenure: "Aug 2021 - Present",
    roles: [
      {
        title: "Lead Engineer",
        type: "Full-time",
        period: "Oct 2025 - Present",
        mode: "On-site",
        points: [
          "Lead a team of 10 engineers in 24x7 rotational shifts, keeping systems available and incidents resolved.",
          "Built internal tools with Node.js, Express.js, React.js and MongoDB, and automated workflows with Python.",
          "Designed monitoring dashboards and alerting with Splunk, OpenSearch, Dynatrace and ServiceNow, integrated with BigPanda and xMatters, maintaining 100% SLA compliance.",
          "Debug production issues across Java, TIBCO BE/BW, Talend and AWS microservices affecting customer payment flows.",
          "Troubleshoot, tune and report on Oracle SQL, Snowflake and Couchbase Capella.",
        ],
        skills: ["Node.js", "Python", "React", "MongoDB", "Splunk", "Dynatrace", "ServiceNow", "Java", "Snowflake"],
      },
      {
        title: "Software Engineer",
        type: "Full-time",
        period: "Aug 2022 - Oct 2025",
        duration: "3 yrs 3 mos",
        mode: "On-site",
        skills: ["Oracle SQL Developer", "AWS"],
      },
      {
        title: "Intern",
        type: "Internship",
        period: "Jan 2022 - Aug 2022",
        duration: "8 mos",
        mode: "Remote",
        skills: ["HTML", "MySQL"],
      },
      {
        title: "Scholar",
        type: "Apprenticeship",
        period: "Aug 2021 - Jan 2022",
        duration: "6 mos",
        mode: "Remote",
        skills: ["Shell Scripting", "DBMS"],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 4. Projects                                                                */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  status: "Live" | "Archived";
  /** One-sentence summary. */
  description: string;
  /** Optional detail bullets. Cards without them just show the description. */
  points?: string[];
  /** Tech chips. */
  tags: string[];
  /** Buttons at the bottom of the card. Each opens in a new tab. */
  links: { label: string; href: string }[];
};

/** To add a project, copy one object below and edit it. The grid reflows by itself. */
export const projects: Project[] = [
  {
    title: "CarePlus",
    status: "Live",
    description:
      "Full-stack healthcare appointment management system built with Next.js.",
    points: [
      "Patients register, book appointments and manage scheduled visits.",
      "Admin tools to confirm, reschedule and cancel appointments.",
      "Real-time SMS notifications and secure file uploads through Appwrite.",
    ],
    tags: ["Next.js", "Appwrite", "TypeScript", "Tailwind CSS", "ShadCN UI", "Azure", "Docker", "Twilio"],
    links: [
      { label: "GitHub", href: "https://github.com/uditaswal/CarePlus" },
      {
        label: "Azure",
        href: "https://careplus-eze4eehwdhdvh2dv.centralindia-01.azurewebsites.net/",
      },
      { label: "Vercel", href: "https://care-plus-one.vercel.app/" },
    ],
  },
  {
    title: "URL Shortener",
    status: "Live",
    description:
      "Link shortener with custom aliases, expiry dates, saved-link management and click tracking.",
    points: [
      "Cookie-based auth with server-side session invalidation.",
      "Alias validation, collision handling, rate limiting and safe redirects.",
      "Analytics dashboard, API docs and GitHub Actions CI with MongoDB tests.",
    ],
    tags: ["Node.js", "Express", "MongoDB", "EJS"],
    links: [
      { label: "GitHub", href: "https://github.com/uditaswal/url-shortner" },
      { label: "Live", href: "https://url-shortner-ugkr.onrender.com/" },
    ],
  },
  {
    title: "Snake Game",
    status: "Live",
    description:
      "A classic Snake game built with pure HTML, CSS and JavaScript. Simple, fast and nostalgic.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "GitHub", href: "https://github.com/uditaswal/JS-SnakeGame" },
      { label: "Play", href: "https://uditaswal.github.io/JS-SnakeGame/" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 5. Skills                                                                  */
/* -------------------------------------------------------------------------- */

/** `image` is a file name inside /public/logo. */
export const skills = [
  { name: "HTML5", image: "html5.svg" },
  { name: "CSS3", image: "css3.svg" },
  { name: "JavaScript", image: "javascript.svg" },
  { name: "TypeScript", image: "typescript.svg" },
  { name: "React", image: "react.svg" },
  { name: "Next.js", image: "nextdotjs.svg" },
  { name: "Tailwind CSS", image: "tailwindcss.svg" },
  { name: "Node.js", image: "nodedotjs.svg" },
  { name: "MongoDB", image: "mongodb.svg" },
  { name: "Oracle SQL", image: "oracle.png" },
  { name: "AWS", image: "aws.svg" },
  { name: "Azure", image: "azure.png" },
];

/* -------------------------------------------------------------------------- */
/* 6. Education                                                               */
/* -------------------------------------------------------------------------- */

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Amity University (WILP)",
    period: "2025 - 2027",
    note: "Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Amity University (WILP)",
    period: "2022 - 2025",
    note: "8.07 CGPA",
  },
  {
    degree: "TechBee Program",
    school: "HCLTech",
    period: "2021 - 2022",
    note: "",
  },
  {
    degree: "Senior Secondary",
    school: "New Green Field School",
    period: "2020 - 2021",
    note: "86%",
  },
];

/* -------------------------------------------------------------------------- */
/* 7. Certificates and honors                                                 */
/* -------------------------------------------------------------------------- */

/** One card in a scrolling row. */
export type Credential = {
  title: string;
  /** Path to an image in /public, for example "/certificates/az_900.png". */
  image: string;
  /** If set, the whole card links here (opens in a new tab). */
  href?: string;
  /** Display text such as "Mar 2025". */
  date?: string;
};

export const certificates: Credential[] = [
  {
    title: "AZ-900: Azure Fundamentals",
    image: "/certificates/az_900.png",
    href: "https://learn.microsoft.com/en-us/users/uditaswal-6053/credentials/7048a4576dc066d0?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "AI-900: Azure AI Fundamentals",
    image: "/certificates/ai_900.png",
    href: "https://learn.microsoft.com/en-us/users/uditaswal-6053/credentials/860c61dbfc03115c?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "AZ-204: Azure Developer Associate",
    image: "/certificates/az_204.png",
    href: "https://learn.microsoft.com/en-us/users/uditaswal-6053/credentials/certification/azure-developer?tab=credentials-tab",
  },
];

/** Newest first. */
export const honors: Credential[] = [
  {
    title: "HCL Innovation Champion",
    image: "/certificates/Certificate Of Recognition 2026 June.png",
    date: "Jun 2026",
  },
  {
    title: "HCL Innovation Champion",
    image: "/certificates/Certificate Of Recognition 2025 December.png",
    date: "Dec 2025",
  },
  {
    title: "HCL ERS Star Champion",
    image: "/certificates/Certificate Of Recognition 2025.png",
    date: "Mar 2025",
  },
  {
    title: "Star Performer",
    image: "/certificates/Certificate Of Recognition 2024.jpg",
    date: "Mar 2024",
  },
  {
    title: "Rising Star",
    image: "/certificates/Certificate Of Recognition 2023.jpg",
    date: "Mar 2023",
  },
];
