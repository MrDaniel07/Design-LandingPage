import { motion } from "motion/react";
import { Instagram, Smartphone, Palette, Zap } from "lucide-react";

export function AnimatedMockups() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Phone mockup - App UI */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-0 top-20"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [5, 7, 5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-64 h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] border-8 border-slate-700 shadow-2xl relative overflow-hidden"
        >
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-3xl" />
          
          {/* Phone screen content */}
          <div className="p-6 pt-12 h-full">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                <div className="space-y-2 flex-1">
                  <div className="h-3 bg-slate-600 rounded w-20" />
                  <div className="h-2 bg-slate-700 rounded w-16" />
                </div>
              </div>
              
              <div className="h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              
              <div className="space-y-2">
                <div className="h-3 bg-slate-600 rounded w-full" />
                <div className="h-3 bg-slate-700 rounded w-3/4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Social media post mockup */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-0 top-32"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [-5, -7, -5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-72 h-72 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-3xl shadow-2xl p-1"
        >
          <div className="w-full h-full bg-slate-900 rounded-3xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-pink-400" />
              <div className="h-2 bg-slate-700 rounded w-24" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-purple-600/50 to-pink-600/50 rounded-2xl flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Palette className="w-16 h-16 text-white" />
              </motion.div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 bg-slate-700 rounded w-full" />
              <div className="h-2 bg-slate-700 rounded w-2/3" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Logo design card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-16 left-1/3"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-48 h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-blue-500/20" />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Zap className="w-20 h-20 text-yellow-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating design elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-1/2 w-12 h-12 border-4 border-purple-500/50 rounded-xl"
      />
      
      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-32 right-16 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"
      />
    </div>
  );
}
