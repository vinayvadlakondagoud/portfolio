# Vinay Vadlakonda — Developer Portfolio

A modern, high-performance 3D developer portfolio built with **React 19**, **Spline (3D)**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase full-stack projects, technical skills, and professional journey with cinematic visual polish.

## Features

- **Interactive 3D Hero** — Fully interactive 3D character scene powered by Spline, with floating tech icons and animated gradient orbs
- **Smooth Momentum Scrolling** — Lenis-powered weighted scroll feel with smooth touch disabled on mobile
- **Performance Optimized** — Lazy-loaded sections, code-split vendors, IntersectionObserver scroll spy
- **Mobile Responsive** — Dedicated mobile navigation and project card components, responsive grids
- **Dynamic Content** — Centralized `data.js` for easy updates to projects, skills, journey, and services
- **Cinematic Visuals** — Blue/indigo/violet color grading, grain overlay, vignette, animated gradient text

## Tech Stack

- **Core**: React 19, Vite 7
- **Styling**: Tailwind CSS v4, Lucide React (icons)
- **Animations**: Framer Motion
- **3D Engine**: @splinetool/react-spline
- **UX**: Lenis (smooth scroll), Intersection Observer

## Getting Started

```bash
git clone https://github.com/vinayvadlakondagoud/portfolio.git
cd portfolio
npm install
npm run dev      # development
npm run build    # production build
npm run preview  # preview production build
```

## Project Structure

```
src/
├── components/
│   ├── hero/          # 3D Scene & Hero section
│   ├── layout/        # Navbar & Footer
│   ├── sections/      # About, Projects, Services, Contact
│   ├── background/    # Starry canvas background
│   └── ui/            # SmoothScroll, Spotlight, CardStack, Preloader, ScrollToTop
├── data/
│   └── data.js        # All centralized content (projects, skills, services, journey)
├── App.jsx            # Main layout, lazy loading, scroll logic
└── index.css          # Theme, animations, gradient-text, card-base, utility classes
```

## Projects

| Project | Stack | Live |
|---------|-------|------|
| Resume Screening & Candidate Ranking | Next.js, FastAPI, PostgreSQL, Docker | ✅ |
| Rental Management System | Flask, MySQL, OTP Auth | — |
| Hostel Management System | React, Node.js, Express, MySQL | ✅ |
| Movies Web Application | React, Node.js, MongoDB, JWT | — |
| Notes Management System | React, Node.js, MongoDB | ✅ |

## Author

**Vinay Vadlakonda**  
Full-Stack Developer · B.Sc. IT (SIES College, 2026)

- GitHub: [@vinayvadlakondagoud](https://github.com/vinayvadlakondagoud)
- LinkedIn: [vinay-vadlakonda](https://linkedin.com/in/vinay-vadlakonda)
- Email: thevinayjpp@gmail.com
