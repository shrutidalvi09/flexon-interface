import React from 'react';

const Hero = () => (
  <header className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center">
    <div className="max-w-6xl mx-auto">
      <div className="bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block border border-blue-500/30">
        BIO-MIMETIC ROBOTIC INTERFACE
      </div>
      <h2 className="text-5xl md:text-7xl font-bold mb-6">FLEXON</h2>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
        "Bridging the boundary between biological movement and mechanical execution."
      </p>
    </div>
  </header>
);

export default Hero;