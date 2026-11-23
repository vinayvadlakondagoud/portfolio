import { Suspense, lazy, useState, useEffect, useCallback } from "react";
import StarryBackground from "./components/background/StarryBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/Footer";
import SmoothScroll from "./components/ui/SmoothScroll";
import Preloader from "./components/ui/Preloader";
import ScrollToTop from "./components/ui/ScrollToTop";

// Lazy load below-the-fold sections
const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Services = lazy(() => import("./components/sections/Services"));
const Contact = lazy(() => import("./components/sections/Contact"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Module-level constant keeps the scroll-spy effect free of re-subscriptions.
const SECTION_MAP = {
  Nest: "home",
  Story: "about",
  Forge: "projects",
  Lab: "services",
  Signal: "contact",
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Nest");

  // Stable identity so the Preloader's timers are not restarted on re-renders.
  const handlePreloaderComplete = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section crosses the middle 20% of screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const activeKey = Object.keys(SECTION_MAP).find(
            (key) => SECTION_MAP[key] === sectionId
          );
          if (activeKey) {
            setActiveSection(activeKey);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Function to attempt observation
    const observeSections = () => {
      let allFound = true;
      Object.values(SECTION_MAP).forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          allFound = false; // Keep retrying if any section (e.g., lazy loaded) is missing
        }
      });
      return allFound;
    };

    // Initial attempt
    observeSections();

    // Retry checking for lazy-loaded sections
    const intervalId = setInterval(() => {
      const done = observeSections();
      if (done) clearInterval(intervalId);
    }, 500);

    // Timeout to stop checking after 10 seconds to avoid infinite loop
    const timeoutId = setTimeout(() => clearInterval(intervalId), 10000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (item) => {
    const sectionId = SECTION_MAP[item];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScroll>
      <div className="bg-[#080b16] text-white grain-overlay">
        <div className="vignette" />
        <StarryBackground />
        <Preloader onComplete={handlePreloaderComplete} />
        <Navbar scrollToSection={scrollToSection} activeSection={activeSection} isLoaded={!isLoading} />
        <Hero scrollToSection={scrollToSection} isLoaded={!isLoading} />
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Projects />
          <Services />
          <Contact />
        </Suspense>

        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
};

export default App;
