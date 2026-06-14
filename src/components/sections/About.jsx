/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FUN_FACTS, SKILL_BARS } from "../../data/data";
import JourneyTimeline from "./JourneyTimeline";
import TechStackSlider from "../ui/TechStackSlider";
import { Download, Sparkles } from "lucide-react";

const SkillBar = ({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group"
  >
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-300 font-tech tracking-wide">{name}</span>
      <span className="text-blue-400 font-tech">{level}%</span>
    </div>
    <div className="h-2 bg-[#0d1520] rounded-full overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.25)]"
      />
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-20 w-full md:w-[80%] mx-auto px-4 z-10 overflow-hidden"
    >
      {/* Section title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 font-display tracking-tight">
        <span className="gradient-text">About Me</span>
      </h2>
      <div className="section-divider" />

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full max-w-sm mx-auto"
        >
          <JourneyTimeline />
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-gray-300"
        >
          {/* Headline */}
          <h3 className="text-3xl font-bold leading-tight font-tech">
            Full-Stack Developer & <br />
            <span className="gradient-text">
              B.Sc. IT Student
            </span>
          </h3>

          {/* Currently learning badge */}
          <div className="flex items-center gap-3">
            <span className="relative inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium font-tech tracking-wide bg-blue-950/30 border border-blue-500/15 text-blue-300 backdrop-blur-xl shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              <span className="absolute left-2 w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping opacity-75"></span>
              <span className="absolute left-2 w-2.5 h-2.5 rounded-full bg-blue-300"></span>
              <span className="pl-4"><Sparkles className="w-3 h-3 inline mr-1 -mt-0.5" />Java Full Stack Cert. · IT Vedant</span>
            </span>
          </div>

          {/* Intro */}
          <p className="text-lg leading-relaxed text-gray-400 font-body">
            I'm a{" "}
            <span className="text-gray-100 font-semibold">
              Full-Stack Developer
            </span>{" "}
            with hands-on experience building <b className="text-blue-300">production-grade</b> web applications using{" "}
            <b>React, Node.js, Flask, and Spring Boot</b>. 
            I architected a full-stack Rental Management System during my internship at{" "}
            <i>Aivariant</i> and have shipped <b className="text-indigo-400">5 projects</b> across diverse tech stacks.
          </p>

          {/* Focus cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-base rounded-xl p-5">
              <h4 className="text-lg font-semibold text-blue-300 mb-2 font-tech uppercase tracking-wide">
                Frontend & UI
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed font-body">
                Building responsive SPAs with React, Next.js, and optimised component architecture.
              </p>
            </div>

            <div className="card-base rounded-xl p-5">
              <h4 className="text-lg font-semibold text-indigo-300 mb-2 font-tech uppercase tracking-wide">
                Backend & APIs
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed font-body">
                Designing secure REST APIs with Express, FastAPI, Flask, and Spring Boot with auth & RBAC.
              </p>
            </div>
          </div>

          {/* Skill Bars */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-display text-gray-500 uppercase tracking-[0.2em]">Skill Proficiency</h4>
            {SKILL_BARS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="card-base rounded-xl p-4 text-center">
              <h4 className="text-2xl font-bold font-display gradient-text">10-Week</h4>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-tech">Internship Delivered</p>
            </div>

            <div className="card-base rounded-xl p-4 text-center">
              <h4 className="text-2xl font-bold font-display gradient-text">6</h4>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-tech">Full-Stack Projects</p>
            </div>

            <div className="card-base rounded-xl p-4 text-center">
              <h4 className="text-2xl font-bold font-display gradient-text">B.Sc. IT</h4>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-tech">SIES College · 2026</p>
            </div>
          </div>

          {/* Resume Download */}
          <motion.a
            href="/Vinay_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 w-fit px-6 py-3 mt-2 rounded-full backdrop-blur-xl bg-blue-950/30 border border-blue-500/15 text-blue-300 font-medium transition-all hover:border-blue-400/30 hover:bg-blue-950/50 font-tech uppercase tracking-wide"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>

          {/* Tech summary */}
          <div className="space-y-2 text-sm pt-2 text-gray-400 font-tech">
            <p>
              <span className="text-blue-300 font-semibold">Languages:</span>{" "}
              Java, Python, JavaScript (ES6+)
            </p>
            <p>
              <span className="text-indigo-300 font-semibold">Databases:</span>{" "}
              MySQL, PostgreSQL, MongoDB
            </p>
            <p>
              <span className="text-gray-300 font-semibold">Fun Facts:</span>{" "}
              {FUN_FACTS.join(", ")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Slider */}
      <div className="mt-20">
        <TechStackSlider />
      </div>
    </section>
  );
};

export default About;
