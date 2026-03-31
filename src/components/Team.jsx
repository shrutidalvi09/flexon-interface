import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, ShieldCheck, Code, Fingerprint } from 'lucide-react';

const Team = () => {
  const members = [
    { name: 'Shreyas Dalvi', role: 'Project Lead', icon: <Fingerprint size={16} /> },
    { name: 'Rudra', role: 'Hardware Eng.', icon: <Code size={16} /> },
    { name: 'Shivam', role: 'Systems Logic', icon: <ShieldCheck size={16} /> },
    { name: 'Khali', role: 'Mechanical Design', icon: <Users size={16} /> },
    { name: 'Atharva', role: 'UI/UX Research', icon: <Fingerprint size={16} /> },
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40 -mr-32 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Academic Affiliation Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            <GraduationCap size={14} className="text-blue-600" />
            DILKAP Research Institute
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
            CORE <span className="text-blue-600 italic">CONTRIBUTORS</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">
            The engineering minds behind the Flexon Bio-Mimetic Interface.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 font-black text-xl mb-6 mx-auto shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-1 uppercase tracking-tight">{member.name}</h3>
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-blue-500/50">{member.icon}</span>
                {member.role}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Guide / Mentor Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto p-1 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[3rem] shadow-xl shadow-blue-500/20"
        >
          <div className="bg-white rounded-[2.9rem] p-10 text-center relative overflow-hidden">
            {/* Decorative background icon */}
            <Users className="absolute -right-4 -bottom-4 text-slate-50 opacity-10" size={140} />
            
            <div className="relative z-10">
              <div className="inline-block p-4 bg-blue-50 rounded-2xl text-blue-600 mb-6">
                <Users size={32} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2">Technical Project Guide</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2 italic">Mr. Nayan Sir</h3>
              <p className="text-slate-500 text-sm font-medium">Expert Advisor & Research Coordinator</p>
            </div>
          </div>
        </motion.div>

        {/* Institutional Footer */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center gap-4">
          <p className="text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em]">Engineering & Management Studies // Mumbai</p>
        </div>
      </div>
    </section>
  );
};

export default Team;