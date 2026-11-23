import React from "react";
import { PROJECTS } from "../../data/data";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRightLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { CardStack } from "../ui/CardStack";

const hasLiveDemo = (p) => p.liveDemo && p.liveDemo !== "#";

const ProjectActions = ({ project, isMobile = false, stopPropagation = false }) => {
  const handleClick = (e) => {
    if (stopPropagation) e.stopPropagation();
  };
  const handlePointerDown = (e) => {
    if (stopPropagation) e.stopPropagation();
  };

  const hasLive = hasLiveDemo(project);
  const btnClass = hasLive ? "flex-1" : "w-full";
  const paddingClass = isMobile ? "py-2.5" : "py-2 pointer-events-auto";

  return (
    <div className={`flex gap-4 w-full ${!isMobile ? "transition-transform duration-300 delay-150" : "mt-auto"}`}>
      {hasLive && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} ${paddingClass} flex items-center justify-center gap-2 rounded-xl font-bold transition-all text-sm bg-white text-black hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
          onPointerDown={handlePointerDown}
          onClick={handleClick}
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      )}
      <a
        href={project.code}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} ${paddingClass} flex items-center justify-center gap-2 rounded-xl font-bold transition-all text-sm ${
          isMobile
            ? "bg-zinc-800 text-white border border-white/10 hover:bg-zinc-700"
            : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
        }`}
        onPointerDown={handlePointerDown}
        onClick={handleClick}
      >
        <Github className="w-4 h-4" />
        Source Code
      </a>
    </div>
  );
};

const ProjectCard = React.memo(({ project, active }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  React.useEffect(() => {
    if (!active) setIsPressed(false);
  }, [active]);

  return (
    <div
      className={`
        relative h-full w-full rounded-2xl overflow-hidden
        transition-all duration-500
          ${active
          ? "shadow-2xl shadow-blue-500/15 ring-1 ring-blue-500/15"
          : "grayscale sepia-[.5] brightness-50"
        }
        group cursor-drag
      `}
      onClick={() => active && setIsPressed(!isPressed)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {/* Animated gradient border on active */}
      {active && (
        <motion.div
          className="absolute -inset-[1px] rounded-2xl opacity-70 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #6366f1, #3b82f6, #6366f1)",
            backgroundSize: "300% 300%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Inner wrapper to clip content inside border */}
      <div className="relative inset-[1px] h-full w-full rounded-2xl overflow-hidden bg-zinc-900 z-10">
        {/* Full Background Image */}
        <div className="absolute inset-0 w-full h-full bg-linear-to-br from-blue-950/20 via-zinc-950 to-indigo-950/20">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className={`
              w-full h-full object-contain block p-2
              transition-transform duration-700
              ${active && !isPressed ? "group-hover:scale-105" : ""}
              ${isPressed ? "scale-105 blur-[2px]" : ""}
            `}
          />
        </div>

        {/* Project Type Badge (always visible) */}
        {active && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-300 border border-blue-500/25 shadow-lg shadow-blue-500/10">
              <Sparkles className="w-3 h-3 inline mr-1 -mt-0.5" />
              {project.type}
            </span>
          </div>
        )}

        {/* Hover/Tap Overlay with Content */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/60
            transition-opacity duration-300
            flex flex-col justify-end p-6
            ${active && isPressed ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        >
          {/* Title */}
          <h3
            className={`
              text-2xl font-bold text-white font-tech tracking-wide uppercase
              transition-transform duration-300
              ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}
            `}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`
              text-gray-300 mt-2 text-sm leading-relaxed line-clamp-2
              transition-transform duration-300 delay-75
              ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}
            `}
          >
            {project.description}
          </p>

          {/* Feature highlights */}
          {project.features && (
            <div
              className={`
                flex flex-wrap gap-1.5 mt-3
                transition-transform duration-300 delay-100
                ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}
              `}
            >
              {project.features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/15 border border-blue-500/20 rounded-md text-[10px] font-medium text-blue-300 uppercase tracking-wider"
                >
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  {f}
                </span>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div
            className={`
              flex flex-wrap gap-1.5 mt-2
              transition-transform duration-300 delay-[120ms]
              ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}
            `}
          >
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-white/10 rounded-md text-[9px] uppercase tracking-wider text-white/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div
            className={`
              w-full mt-3
              transition-transform duration-300 delay-150
              ${isPressed ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}
            `}
          >
            <ProjectActions project={project} stopPropagation={true} />
          </div>
        </div>
      </div>
    </div>
  );
});

const MobileProjectCard = React.memo(({ project }) => {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg flex flex-col relative">
      {/* Gradient accent top border */}
      <div className="h-[2px] w-full bg-linear-to-r from-blue-500/50 via-indigo-500/50 to-blue-500/50" />

      {/* Image Section */}
      <div className="relative w-full aspect-[2.2/1] bg-linear-to-br from-blue-950/20 via-zinc-950 to-indigo-950/20 overflow-hidden rounded-t-2xl">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-contain p-1.5"
        />
        {/* Tech Stack Overlay */}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-black/70 backdrop-blur-md rounded text-[9px] uppercase tracking-wider text-white/90 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 bg-blue-500/20 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-blue-300 border border-blue-500/25">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-white font-tech tracking-wide uppercase mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Feature highlights */}
        {project.features && (
          <div className="flex flex-wrap gap-1.5">
            {project.features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-[9px] font-medium text-blue-300 uppercase tracking-wider"
              >
                <CheckCircle2 className="w-2.5 h-2.5" />
                {f}
              </span>
            ))}
          </div>
        )}

        <ProjectActions project={project} isMobile={true} />
      </div>
    </div>
  );
});

const Projects = () => {
  const renderCard = React.useCallback(
    (project, { active }) => <ProjectCard project={project} active={active} />,
    []
  );

  return (
    <section id="projects" className="relative py-16 md:py-20 px-4 z-10 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 font-display tracking-tight">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="section-divider" />

        <div className="text-center mb-2 text-gray-500 hidden md:flex items-center justify-center gap-2 animate-pulse">
          <ArrowRightLeft className="w-4 h-4" />
          <span className="text-sm uppercase tracking-widest">Drag • Hover for Details</span>
        </div>

        {/* Desktop View: Card Stack */}
        <div className="hidden md:block w-full">
          <CardStack
            items={PROJECTS}
            cardWidth={640}
            cardHeight={400}
            autoAdvance={true}
            intervalMs={2800}
            springStiffness={180}
            springDamping={30}
            renderCard={renderCard}
          />
        </div>

        {/* Mobile View: Vertical Grid */}
        <div className="md:hidden w-full flex flex-col gap-8 pb-10">
          {PROJECTS.map((project, index) => (
            <div key={index} className="w-full">
              <MobileProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
