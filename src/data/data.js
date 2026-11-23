import { Code2, Server, Brain, Database, Github, Linkedin } from "lucide-react";
import movieswebImg from "../assets/moviesweb.png";
import nmsImg from "../assets/nms.png";
import olpImg from "../assets/olp.png";

export const HERO_ROLES = [
  "Full-Stack Developer",
  "React & Spring Boot Engineer",
  "Java Full-Stack Developer",
  "NLP Enthusiast"
];

export const NAV_ITEMS = ["Nest", "Story", "Forge", "Lab", "Signal"];

export const SKILL_BARS = [
  { name: "React / Next.js", level: 90 },
  { name: "Java / Spring Boot", level: 86 },
  { name: "Node.js / Express", level: 85 },
  { name: "Python (Flask / FastAPI)", level: 82 },
  { name: "SQL / MongoDB", level: 84 },
  { name: "Docker / Git / CI-CD", level: 78 },
];

export const SKILLS = {
  Languages: ["Java", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js (Express)", "Spring Boot", "FastAPI", "Flask"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Render"],
  Competencies: ["REST APIs", "JWT", "Role-Based Access Control", "Razorpay", "WebSocket", "CI/CD", "NLP (TF-IDF)", "Agile"]
};

export const FUN_FACTS = [
  "Completed two software development internships across EdTech, hiring and rental products",
  "Built a full-stack LMS with a 28-table schema and 90+ Spring Boot endpoints",
  "Integrated Razorpay payments with HMAC-SHA256 verification",
  "Applied NLP (TF-IDF + cosine similarity) with 85%+ screening accuracy",
  "Fixed 15+ production issues across role-based dashboards"
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
      "React SPA with search, genre filtering, trailers and cast details, and a persistent watchlist — backed by a custom Express/MongoDB REST API with 15+ endpoints. Optimised with React.memo and lazy loading for a 40% faster initial load.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    type: "MERN · Full-Stack",
    features: ["Search & Filters", "Trailers & Cast", "Watchlist", "15+ REST Endpoints"],
    gradient: "from-blue-600 to-indigo-600",
    liveDemo: "#",
    code: "https://github.com/vinayvadlakondagoud/moviesweb",
    img: movieswebImg
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
    img: nmsImg
  },
  {
    title: "LearnHub — Online Learning Platform",
    description:
      "Full-stack LMS with 3 user roles, a 28-table MySQL schema and 90+ JWT-protected Spring Boot endpoints. WebRTC live classes with WebSocket signalling, course recommendations, Razorpay payments with HMAC verification, and auto-graded assessments with PDF certificates.",
    tech: ["React", "Spring Boot", "MySQL", "WebSocket", "Razorpay"],
    type: "Full-Stack · EdTech",
    features: ["90+ REST APIs", "WebRTC Live Classes", "Razorpay Payments", "PDF Certificates"],
    gradient: "from-indigo-600 to-blue-600",
    liveDemo: "#",
    code: "https://github.com/vinayvadlakondagoud/learnhub",
    img: olpImg
  },
  {
    title: "Resume Screening & Candidate Ranking",
    description:
      "AI screening tool that parses resumes and scores them against job descriptions using TF-IDF and cosine similarity with 85%+ accuracy. Ranks candidates on a dashboard, handles bulk uploads of 100+ resumes, exports to CSV/Excel, and runs in Docker on Render with CI/CD.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "NLP", "Docker"],
    type: "NLP · Full-Stack",
    features: ["TF-IDF Scoring", "Bulk Upload", "CSV/Excel Export", "CI/CD on Render"],
    gradient: "from-blue-600 to-indigo-600",
    liveDemo: "https://resume-screening-frontend-1gcw.onrender.com",
    code: "https://github.com/vinayvadlakondagoud/Resume_Screening",
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
    description: "Built a full-stack Rental Management System (Flask + MySQL) with 10+ REST APIs, OTP auth and role-based controls, handling 500+ monthly transactions in a 10-week remote sprint."
  },
  {
    year: "2026",
    title: "B.Sc. IT — SIES College",
    description: "Completed Bachelor of Science in Information Technology at SIES College of Arts, Science and Commerce, Mumbai."
  },
  {
    year: "2026",
    title: "Java Full Stack Intern @ Great Hire",
    description: "Delivered features across an AI hiring platform and tuition LMS (React, Node.js, MongoDB, Razorpay) for 6 roles; fixed 15+ production issues and built tutor settlement workflows."
  },
  {
    year: "2026",
    title: "Full-Stack Certifications",
    description: "Completed IBM Skills Network / IT Vedant Java full-stack program (Aug) and Skill India NSDC certification (Nov)."
  }
];
