export const profile = {
  name: "Udit Aswal",
  role: "Lead Software Engineer",
  company: "HCLTech",
  companyUrl: "https://www.hcltech.com/",
  email: "udit.aswal37@gmail.com",
  github: "https://www.github.com/uditaswal",
  linkedin: "https://www.linkedin.com/in/uditaswal",
  resume: "/Udit_Resume.pdf",
};

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

export type Project = {
  title: string;
  status: "Live" | "Archived";
  description: string;
  points?: string[];
  tags: string[];
  links: { label: string; href: string }[];
};

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

export type Credential = {
  title: string;
  image: string;
  href?: string;
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

export const experience = [
  {
    role: "Lead Production Support Engineer",
    company: "HCL Technologies",
    detail: "Western Union project",
    period: "2022 - Present",
    points: [
      "Led a team of 10 engineers in 24x7 rotational shifts, keeping systems available and incidents resolved.",
      "Built internal tools with Node.js, Express.js, React.js and MongoDB, and automated workflows with Python.",
      "Designed monitoring dashboards and alerting with Splunk, OpenSearch, Dynatrace and ServiceNow, integrated with BigPanda and xMatters, maintaining 100% SLA compliance.",
      "Debugged production issues across Java, TIBCO BE/BW, Talend and AWS microservices affecting customer payment flows.",
      "Troubleshot, tuned and reported on Oracle SQL, Snowflake and Couchbase Capella.",
    ],
    tags: ["Node.js", "React", "MongoDB", "Python", "Splunk", "Dynatrace", "OpenSearch", "ServiceNow", "Java", "AWS", "Oracle SQL", "Snowflake"],
  },
];
