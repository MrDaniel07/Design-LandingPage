import { motion } from "motion/react";
import { Smartphone, Image, Palette, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "App UI Design",
    description: "Beautiful, intuitive interfaces that users love",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Image,
    title: "Social Media Design",
    description: "Eye-catching posts that stop the scroll",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Cohesive brand identities that tell your story",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Lightbulb,
    title: "Logo Design",
    description: "Memorable logos that make an impact",
    gradient: "from-yellow-500 to-orange-500",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl text-white mb-4">
            What I Can Create For You
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Every creative idea deserves to be brought to life with excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
                  {/* Hover gradient effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>

                  {/* Animated corner accent */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
