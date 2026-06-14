import { Code2, Server, Brain, Database, Github, Linkedin } from "lucide-react";

export const HERO_ROLES = [
  "Full-Stack Developer",
  "React & Node.js Engineer",
  "Java Spring Boot Dev",
  "NLP Enthusiast"
];

export const NAV_ITEMS = ["Nest", "Story", "Forge", "Lab", "Signal"];

export const SKILL_BARS = [
  { name: "React / Next.js", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "Python (Flask / FastAPI)", level: 82 },
  { name: "Java / Spring Boot", level: 72 },
  { name: "SQL / MongoDB", level: 80 },
  { name: "Docker / Git", level: 75 },
];

export const SKILLS = {
  Languages: ["Java", "Python", "JavaScript (ES6+)"],
  Frontend: ["React.js", "Next.js", "HTML5", "CSS3"],
  Backend: ["Node.js (Express)", "FastAPI", "Flask", "Spring Boot"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Render"],
  Competencies: ["REST API Design", "NLP (TF-IDF)", "OTP Auth", "CRUD Architecture", "Agile"]
};

export const FUN_FACTS = [
  "Shipped 5 production-grade full-stack projects in a single academic year",
  "Applied NLP (TF-IDF + cosine similarity) inside a production product",
  "Built OTP authentication without third-party libraries",
  "Delivered remote internship at Aivariant on time and to spec",
  "End-to-end solutions from responsive frontends to secure backends"
];

export const PROJECTS = [
  {
    title: "Hostel Management System",
    description:
      "Streamlines hostel operations — student management, complaints, feedback, and messaging between students and wardens. Fully responsive UI with role-based access controls.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    type: "Full-Stack · React",
    features: ["Student Dashboard", "Complaint System", "Messaging", "Admin Controls"],
    gradient: "from-indigo-600 to-blue-600",
    liveDemo: "https://hostel-management-system-1-3c10.onrender.com",
    code: "https://github.com/vinayvadlakondagoud/hostel-management-system",
    img: "/hostel.png"
  },
  {
    title: "Rental Management System",
    description:
      "Built for Aivariant during internship — 10+ RESTful API endpoints covering OTP-based auth, property listing with admin approval, booking lifecycle, and role-based dashboards for tenants and admins.",
    tech: ["Flask", "MySQL", "OTP Auth", "Bootstrap", "Python"],
    type: "Internship · Flask",
    features: ["OTP Email Verification", "Admin Panel", "Multi-Category", "Booking Workflow"],
    gradient: "from-blue-600 to-indigo-600",
    liveDemo: "#",
    code: "https://github.com/vinayvadlakondagoud/rental-management-system",
    img: "/Rental.png"
  },
  {
    title: "Movies Web Application",
    description:
      "MERN stack platform to explore, review, and manage movies. Features real-time search, multi-industry filtering (Bollywood/Hollywood/Tollywood), YouTube trailer integration, and a full admin dashboard with analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    type: "MERN · Full-Stack",
    features: ["Genre/Industry Filters", "Ratings & Reviews", "Watchlist", "Admin Analytics"],
    gradient: "from-blue-600 to-indigo-600",
    liveDemo: "#",
    code: "https://github.com/vinayvadlakondagoud/moviesweb",
    img: "/movie.png"
  },
  {
    title: "Notes Management System",
    description:
      "Full-stack note-taking app with CRUD operations, real-time search by title/content, user authentication, and a clean responsive UI. Built from a buggy codebase — fixed all logic errors and refactored the API.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    type: "Full-Stack · MERN",
    features: ["CRUD Operations", "Live Search", "User Auth", "Bug Fixing"],
    gradient: "from-indigo-600 to-blue-600",
    liveDemo: "https://notesapp-g47d.onrender.com",
    code: "https://github.com/vinayvadlakondagoud/NotesApp",
    img: "/Notes.png"
  },
  {
    title: "Resume Screening & Candidate Ranking",
    description:
      "Automates resume screening — upload a job description, submit resumes (PDF/DOC/DOCX), and get each candidate scored 0–100 with ranked results, exportable to CSV or Excel. Containerised with Docker, deployed on Render.",
    tech: ["Next.js 14", "FastAPI", "PostgreSQL", "Docker", "scikit-learn"],
    type: "NLP · Full-Stack",
    features: ["TF-IDF Scoring", "Bulk Upload", "CSV/Excel Export", "Async Processing"],
    gradient: "from-blue-600 to-indigo-600",
    liveDemo: "https://resume-screening-frontend-1gcw.onrender.com",
    code: "https://github.com/vinayvadlakondagoud/resume-screening",
    img: "/resume.png"
  }
];

export const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Architecting end-to-end web applications from responsive React/Next.js frontends to secure RESTful backends with Node.js, FastAPI, or Spring Boot.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Server,
    title: "REST API Architecture",
    description:
      "Designing scalable, secure API endpoints with authentication, role-based access, and database integration using Express, Flask, or Spring Boot.",
    gradient: "from-indigo-600 to-indigo-800"
  },
  {
    icon: Brain,
    title: "NLP & Data Solutions",
    description:
      "Applying TF-IDF, cosine similarity, and text processing techniques to build intelligent systems like resume screening and candidate ranking.",
    gradient: "from-blue-600 to-indigo-800"
  },
  {
    icon: Database,
    title: "Database Design & CRUD",
    description:
      "Normalising relational schemas (MySQL/PostgreSQL) and designing NoSQL document stores (MongoDB) for clean, performant data layers.",
    gradient: "from-indigo-600 to-blue-800"
  }
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/vinayvadlakondagoud",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/vinay-vadlakonda",
    label: "LinkedIn"
  }
];

export const JOURNEY = [
  {
    year: "2020",
    title: "Class X - Maharashtra Board",
    description: "Completed secondary education at The Andhra Education Society's High School with 71.60%."
  },
  {
    year: "2022",
    title: "Class XII - Commerce",
    description: "Completed higher secondary at Andhra Education Society Jr. College, Mumbai with 74.33%."
  },
  {
    year: "2023",
    title: "B.Sc. IT at SIES College",
    description: "Started Bachelor of Science in Information Technology at SIES College of Arts, Science and Commerce."
  },
  {
    year: "2025",
    title: "Python Developer Intern @ Aivariant",
    description: "Built a full-stack Rental Management System (Flask + MySQL) with 10+ RESTful endpoints and OTP-based auth during a 10-week remote engagement."
  },
  {
    year: "2026",
    title: "Java Full Stack Certification",
    description: "Enrolled in IT Vedant's intensive Java Full Stack Developer program covering React, Spring Boot, and MySQL with capstone delivery."
  }
];
