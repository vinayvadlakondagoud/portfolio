import { motion } from "framer-motion";
import { JOURNEY } from "../../data/data";

const JourneyTimeline = () => {
  return (
    <section className="mt-32 max-w-4xl mx-auto px-4">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16 md:mb-20 font-display tracking-tight">
        <span className="gradient-text">My Journey</span>
      </h3>

      <div className="relative border-l border-white/10">
        {JOURNEY.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative pl-10 pb-14"
          >
            {/* Dot */}
            <span className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-linear-to-r from-gray-400 to-gray-600 shadow-[0_0_10px_rgba(255,255,255,0.2)] ring-1 ring-white/20" />

            {/* Card */}
            <div className="card-base rounded-2xl p-6">
              <span className="text-sm text-gray-300 font-tech tracking-wider">
                {item.year}
              </span>
              <h4 className="text-xl font-semibold mt-1 mb-2 text-gray-100 font-tech tracking-wide uppercase">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;
