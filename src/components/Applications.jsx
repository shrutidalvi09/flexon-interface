import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Clock3, Brain, Zap, Users } from 'lucide-react';

const Applications = () => {
  const apps = [
    {
      title: "Enhanced User Reach",
      desc: "Reach a wider, more qualified audience with intuitive tools.",
      icon: <Target className="text-blue-600" size={24} />,
      color: "border-blue-100 bg-blue-50"
    },
    {
      title: "Data-Driven Results",
      desc: "Make informed, evidence-based choices using integrated real-time analytics.",
      icon: <BarChart3 className="text-emerald-600" size={24} />,
      color: "border-emerald-100 bg-emerald-50"
    },
    {
      title: "Efficient Performance",
      desc: "Optimize operational workflows to save valuable time and resources.",
      icon: <Clock3 className="text-purple-600" size={24} />,
      color: "border-purple-100 bg-purple-50"
    },
    {
      title: "Intelligent Adaptation",
      desc: "Leverage advanced neural logic for seamless, proactive interface adjustment.",
      icon: <Brain className="text-amber-600" size={24} />,
      color: "border-amber-100 bg-amber-50"
    },
    {
      title: "Instant Response",
      desc: "Experience ultra-fast, bio-mimetic execution with near-zero latency.",
      icon: <Zap className="text-cyan-600" size={24} />,
      color: "border-cyan-100 bg-cyan-50"
    },
    {
      title: "Seamless Team Integration",
      desc: "Foster cohesive collaboration with robust, multi-user synchronized interfaces.",
      icon: <Users className="text-rose-600" size={24} />,
      color: "border-rose-100 bg-rose-50"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: 'easeOut' }
    })
  };

  return (
    <section id="applications" className="py-24 bg-white relative overflow-hidden">
      {/* 1. Subtler Grid Background (White-Themed) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* 2. White-Themed Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 border border-blue-100">
            FLEXON SYSTEM APPLICATIONS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tight">
            DEPLOYMENT <span className="text-blue-600 italic">SCENARIOS</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Exploring the seamless application of our advanced bio-mimetic interface across critical technological and operational domains.
          </p>
        </motion.div>

        {/* 3. Modern, Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-8 rounded-2xl bg-white border ${app.color} transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5`}
            >
              {/* Subtle hover accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-inner border border-white">
                  {app.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 mb-4 tracking-tight">
                  {app.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-light">
                  {app.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Subtle White Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default Applications;