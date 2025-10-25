import { motion } from "motion/react";
import { Mail, Phone, Send, ArrowRight } from "lucide-react";

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:danielanyahuru20@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+2348071678058";
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-6xl text-white mb-4">
            Let's Create Something
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Ready to bring your creative vision to life? Get in touch!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleEmailClick}
            className="group cursor-pointer"
          >
            <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4"
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-white mb-2">Email Me</h3>
                <p className="text-slate-300">danielanyahuru20@gmail.com</p>
                
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-purple-400 mt-4"
                >
                  <span>Send a message</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Animated icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 opacity-10"
              >
                <Send className="w-24 h-24 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Phone card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            onClick={handlePhoneClick}
            className="group cursor-pointer"
          >
            <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4"
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-white mb-2">Call Me</h3>
                <p className="text-slate-300">08071678058</p>
                
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-blue-400 mt-4"
                >
                  <span>Let's talk</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Animated icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 opacity-10"
              >
                <Phone className="w-24 h-24 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <div className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[2px]">
              <div className="bg-slate-900 rounded-full px-6 py-2">
                <p className="text-white">
                  Available for freelance projects • Let's collaborate!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Portfolio button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://anyahurudanportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all duration-300"
            >
              <span>Explore My Portfolio</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            bottom: 0,
          }}
        />
      ))}
    </section>
  );
}
