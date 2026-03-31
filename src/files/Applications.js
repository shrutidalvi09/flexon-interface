import React from 'react';
import { Settings } from 'lucide-react';

const Applications = () => (
  <section id="applications" className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-16 underline decoration-blue-500 underline-offset-8">Future Scope</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        { title: "Defense", desc: "Controlling tactical drones and remote weapon systems safely." },
        { title: "Medical", desc: "Advanced prosthetics and high-precision remote tele-surgery." },
        { title: "Exploration", desc: "Deep-sea and space missions where human presence is restricted." },
        { title: "Industrial", desc: "Human-Machine Interface (HMI) for manufacturing and heavy lifting." }
      ].map((app) => (
        <div key={app.title} className="flex gap-4 p-6 hover:bg-white hover:shadow-lg transition rounded-xl">
          <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <Settings size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">{app.title}</h4>
            <p className="text-slate-500">{app.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Applications;