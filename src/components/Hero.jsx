import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for a staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-[#030712] overflow-hidden">
      
      {/* 1. Enhanced Mesh Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        {/* Animated Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10 text-center"
      >
        {/* 2. Professional Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">
            System Status: Nominal
          </span>
        </motion.div>

        {/* 3. High-End Typography */}
        <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-black mb-8 tracking-tighter">
          <span className="inline-block text-white">FLEX</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 via-blue-400 to-indigo-400">
            ON
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Pioneering the synthesis of <span className="text-white font-medium">neural architecture</span> and 
          <span className="text-white font-medium"> advanced robotics</span> to redefine human potential.
        </motion.p>

        {/* 4. Glassmorphism CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="group relative px-10 py-4 bg-blue-600 text-white font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            EXPLORE CORE
          </button>
          
          <button className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-xl">
            DOCUMENTATION
          </button>
        </motion.div>

        {/* 5. Metrics Section with Divider */}
        <motion.div variants={itemVariants} className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          {[
            { label: "Latency", value: "< 2.4ms" },
            { label: "Stability", value: "99.99%" },
            { label: "Integration", value: "Universal" },
            { label: "Core Tech", value: "Neural v4" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2">{stat.label}</span>
              <span className="text-3xl font-bold text-white tracking-tighter">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* 6. Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </header>
  );
};

export default Hero;