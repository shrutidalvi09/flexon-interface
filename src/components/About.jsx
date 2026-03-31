import React from 'react';
import { Shield, Activity } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Shield className="text-red-500" /> The Problem
      </h3>
      <p className="text-slate-600 leading-relaxed">
        Traditional robotic control relies on rigid inputs like buttons or joysticks, 
        lacking the fluid, intuitive movement required for precision tasks.
      </p>
    </div>
    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Activity className="text-blue-600" /> The Solution
      </h3>
      <p className="text-slate-600 leading-relaxed">
        FLEXON uses flex sensors to detect finger strain, translating physical resistance 
        shifts into precise servo motor angles to mirror hand movement instantly.
      </p>
    </div>
  </section>
);

export default About;