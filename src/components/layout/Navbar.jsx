import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../data/data";

const Navbar = ({ scrollToSection, activeSection, isLoaded }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    scrollToSection(item);
    setOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex justify-between items-center w-4/5"
      >
        <div className="
          flex justify-between items-center w-full 
          bg-[#0a1020]/40 backdrop-blur-3xl saturate-150
          border border-white/8 border-t-white/15
          rounded-full px-8 py-3.5 
          shadow-2xl shadow-black/50
          ring-1 ring-white/3
        ">
          
          {/* Name / Logo */}
          <span className="text-2xl md:text-3xl font-bold font-display tracking-wider gradient-text">
            Vinay.
          </span>

          {/* Links */}
          <div className="flex items-center gap-3">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-tech uppercase tracking-wide ${
                   activeSection === item
                    ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                    : "text-gray-400 hover:text-blue-300 hover:bg-blue-950/30"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12">
        <div className="flex justify-between items-center bg-[#0a1020]/40 backdrop-blur-3xl saturate-150 border border-white/8 border-t-white/15 rounded-full px-4 py-3 shadow-2xl shadow-black/50 ring-1 ring-white/3">
          {/* Name */}
          <span className="text-xl font-bold gradient-text">
            Vinay.
          </span>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {open ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-4 flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                   activeSection === item
                    ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white"
                    : "text-gray-400 hover:text-blue-300 hover:bg-blue-950/30"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
