/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Code2, Database, Server, Cpu } from "lucide-react";
import { HERO_ROLES } from "../../data/data";
import Developer3D from "./Developer3D";
import { Spotlight } from "../ui/Spotlight";

const floatingIcons = [
  { Icon: Code2, delay: 0, x: "10%", y: "20%" },
  { Icon: Database, delay: 1.5, x: "80%", y: "30%" },
  { Icon: Server, delay: 0.8, x: "15%", y: "70%" },
  { Icon: Cpu, delay: 2.2, x: "75%", y: "75%" },
];

const Hero = ({ scrollToSection, isLoaded }) => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % HERO_ROLES.length;
      const fullText = HERO_ROLES[i];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:pt-28 pt-32 px-4 z-10 overflow-hidden"
    >
      {/* Blue spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#3b82f6" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left flex-1 z-20 md:w-1/2 max-w-2xl"
        >
          {/* Status Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm md:text-base font-tech uppercase tracking-widest text-blue-300 bg-blue-950/30 backdrop-blur-xl border border-blue-500/15 rounded-full shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Full-Stack Developer · MERN & Spring Boot
          </motion.span>

          <span className="text-gray-400 text-lg font-tech tracking-wider block mb-2">
            Hey, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 font-display tracking-tight gradient-text inline-block">
            Vinay Vadlakonda
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8 h-12 text-gray-400 font-tech">
            <span className="text-blue-300">{text}</span>
            <span className="animate-pulse text-blue-400">|</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-6 md:mb-8 max-w-xl leading-relaxed font-body">
            Architecting end-to-end solutions — from responsive React
            frontends to secure RESTful backends and relational/NoSQL databases.
            Passionate about clean code, system performance, and solving real-world
            engineering problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("Signal")}
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 cursor-pointer font-tech uppercase tracking-wide"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("Forge")}
              className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500/25 text-blue-300 rounded-full font-semibold backdrop-blur-sm hover:bg-blue-950/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer font-tech uppercase tracking-wide"
            >
              View Work
            </button>
          </div>
        </motion.div>

        {/* Right Side: 3D Developer + Floating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center items-center w-full md:absolute md:right-0 md:top-0 md:h-full md:w-[50%] lg:w-[60%] pointer-events-none"
        >
          {/* Colored gradient wash over 3D model */}
          <div className="absolute inset-0 bg-linear-to-t from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none z-10" />

          <div
            className="w-full h-full pointer-events-auto"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
            }}
          >
            <Developer3D />
          </div>

          {/* Floating tech icons */}
          {floatingIcons.map(({ Icon, delay, x, y }) => (
            <motion.div
              key={delay}
              className="absolute hidden md:block text-blue-400/30"
              style={{ left: x, top: y }}
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <ChevronDown className="w-8 h-8 text-blue-500/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
