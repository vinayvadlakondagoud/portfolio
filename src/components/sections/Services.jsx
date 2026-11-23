import { SERVICES } from "../../data/data";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-20 px-4 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 font-display tracking-tight">
          <span className="gradient-text">What I Do</span>
        </h2>
        <div className="section-divider" />

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative card-base p-8 rounded-3xl hover:-translate-y-1.5 duration-500 transition-all overflow-hidden shadow-lg shadow-black/20"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity mix-blend-overlay`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-4 rounded-2xl mb-6 bg-blue-950/30 border border-blue-500/10 text-blue-300 group-hover:text-blue-200 group-hover:border-blue-400/30 transition-all"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-200 group-hover:text-white transition-colors font-tech uppercase tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
