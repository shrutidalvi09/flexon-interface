import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Zap, Cpu, Activity, Move } from 'lucide-react';

const WorkingPrinciple = () => {
  const steps = [
    { 
      title: "Finger Bends", 
      desc: "Flex sensor on a glove detects physical strain as the finger moves.",
      icon: <Activity size={20} />,
      detail: "Captures angular displacement using resistive ink technology."
    },
    { 
      title: "Resistance Change", 
      desc: "Bending increases electrical resistance within the sensor.",
      icon: <Zap size={20} />,
      detail: "Converts mechanical stress into measurable ohmic variance."
    },
    { 
      title: "Voltage Shift", 
      desc: "Arduino monitors these voltage shifts through a divider circuit.",
      icon: <MousePointer2 size={20} />,
      detail: "Translates resistance into a 0-5V analog input signal."
    },
    { 
      title: "Signal Processing", 
      desc: "The controller maps analog values to precise motor angles.",
      icon: <Cpu size={20} />,
      detail: "Uses mapping algorithms to calibrate degree-of-freedom limits."
    },
    { 
      title: "Mechanical Execution", 
      desc: "Servo motors rotate, causing the robotic finger to mimic the hand.",
      icon: <Move size={20} />,
      detail: "High-torque servos actuate pulleys to replicate human grip."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            WORKING <span className="text-blue-600 italic font-black">PRINCIPLE</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A high-fidelity synchronization pipeline between human intent and robotic response.
          </p>
        </div>

        {/* Process Flow UI */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center"
              >
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-blue-500/5">
                  {step.icon}
                </div>

                {/* Content Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-slate-200/50 transition-all duration-500">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-2 block">
                    Phase 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                  
                  {/* Depth Explanation (Appears on Hover or Desktop) */}
                  <div className="pt-4 border-t border-slate-200 mt-2">
                    <p className="text-[11px] font-medium text-slate-400 italic">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Mobile Connector Line */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-slate-200 my-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Footer Citation */}
        <p className="mt-16 text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          Source: Bio-Mechanical Protocol Documentation [Ref: 106-116]
        </p>
      </div>
    </section>
  );
};

export default WorkingPrinciple;