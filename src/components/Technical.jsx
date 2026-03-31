import React from 'react';
import { Activity, Settings, Grid3X3, Cpu, Zap, ZapOff, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Technical = () => {
  const hardware = [
    { 
      name: 'Flex Sensor', 
      icon: <Activity size={22} />, 
      spec: 'Resistive',
      desc: 'The sensory "nerves." It measures the bend of the finger by changing resistance. As the carbon particles move apart, the resistance increases, allowing the system to track movement.'
    },
    { 
      name: 'Servo Motor', 
      icon: <Settings size={22} />, 
      spec: 'High-Torque',
      desc: 'The "muscle" of the robotic finger. It receives PWM signals and rotates to specific angles, pulling a mechanical tendon to replicate the hand’s position.'
    },
    { 
      name: 'Breadboard', 
      icon: <Grid3X3 size={22} />, 
      spec: 'Prototype',
      desc: 'The "central nervous system" chassis. It allows for solderless connections between the power supply, sensors, and the controller for rapid prototyping.'
    },
    { 
      name: 'Arduino Uno', 
      icon: <Cpu size={22} />, 
      spec: 'ATmega328P',
      desc: 'The "brain." It processes analog signals from the sensors, calculates the necessary movement logic, and outputs instructions to the motors.'
    },
    { 
      name: 'Jumper Wires', 
      icon: <Zap size={22} />, 
      spec: 'M-M / M-F',
      desc: 'The "axons." These high-conductivity wires ensure low-latency signal transmission across the entire hardware architecture.'
    },
    { 
      name: '1K Resistor', 
      icon: <ZapOff size={22} />, 
      spec: 'Pull-down',
      desc: 'The "stabilizer." It creates a voltage divider circuit to transform the sensor’s resistance into a voltage the Arduino can actually read.'
    }
  ];

  return (
    <section id="tech" className="py-24 bg-white px-6 relative">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            COMPONENT <span className="text-blue-600 italic">ANALYSIS</span>
          </h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Hardware Specification & Functional Role</p>
        </div>

        {/* Technical Cards with Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hardware.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                  {item.icon}
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-blue-500 font-black uppercase tracking-widest">{item.spec}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed font-light italic">
                {item.desc}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                <Info size={14} className="text-blue-500" />
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Operational Ready</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Technical Bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50/50 py-4 rounded-full border border-slate-100">
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Architecture: Modular</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Interface: Analog-to-Digital</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Power: 5V Regulated</span>
        </div>
      </div>
    </section>
  );
};

export default Technical;