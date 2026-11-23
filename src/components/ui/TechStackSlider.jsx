import { motion } from "framer-motion";

const ROW_ONE = [
  { name: "React", img: "https://icon.icepanel.io/Technology/svg/React.svg" },
  { name: "Next.js", img: "https://icon.icepanel.io/Technology/svg/Next.js.svg" },
  { name: "JavaScript", img: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
  { name: "Node.js", img: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
  { name: "Python", img: "https://icon.icepanel.io/Technology/svg/Python.svg" },
  { name: "Java", img: "https://icon.icepanel.io/Technology/svg/Java.svg" },
  { name: "HTML5", img: "https://icon.icepanel.io/Technology/svg/HTML5.svg" },
  { name: "CSS3", img: "https://icon.icepanel.io/Technology/svg/CSS3.svg" },
];

const ROW_TWO = [
  { name: "Flask", img: "https://icon.icepanel.io/Technology/svg/Flask.svg" },
  { name: "FastAPI", img: "https://icon.icepanel.io/Technology/svg/FastAPI.svg" },
  { name: "Spring Boot", img: "https://icon.icepanel.io/Technology/svg/Spring.svg" },
  { name: "MySQL", img: "https://icon.icepanel.io/Technology/svg/MySQL.svg" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", img: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
  { name: "Docker", img: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
  { name: "Git", img: "https://icon.icepanel.io/Technology/svg/Git.svg" },
];

// Declared at module scope so it keeps its identity across renders.
const MovingRow = ({ items, direction = "left", speed = 25 }) => {
  return (
    <div
      className="relative flex overflow-hidden py-3 group"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex gap-6 flex-nowrap w-max px-4"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="
                relative group/item
                px-5 py-2.5
                rounded-full
                backdrop-blur-md
                bg-white/5
                border border-white/10
                flex items-center gap-3 justify-center
                transition-all duration-300
                hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                cursor-default
              "
          >
            <div className="group-hover/item:scale-110 transition-transform duration-300 flex items-center justify-center w-6 h-6">
              {item.img ? (
                <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-contain" />
              ) : (
                item.icon
              )}
            </div>
            <span className="text-gray-300 font-tech font-medium whitespace-nowrap group-hover/item:text-white transition-colors text-sm tracking-wide">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStackSlider = () => {
  return (
    <div className="w-full py-8 space-y-2 overflow-hidden">
      <h3 className="text-center text-sm font-display font-semibold text-gray-500 mb-6 uppercase tracking-[0.2em]">
        Tech Arsenal
      </h3>

      <MovingRow items={ROW_ONE} direction="left" speed={35} />
      <MovingRow items={ROW_TWO} direction="right" speed={30} />
    </div>
  );
};

export default TechStackSlider;
