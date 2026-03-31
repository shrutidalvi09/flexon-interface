import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react'; // Professional icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Optimized scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => setIsMobileMenuOpen(false), [location]);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Technical', path: '/tech' },
    { name: 'The Team', path: '/team' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] px-6 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0a0f1d]/90 backdrop-blur-xl border-b border-white/10 py-3' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo with Brand Icon */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-blue-600 rounded-xl group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300">
            <Cpu size={20} className="text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Flexon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-blue-400 ${
                location.pathname === link.path ? 'text-blue-500' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="ml-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all shadow-lg shadow-blue-900/20">
            Start Sync
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-6 items-center bg-[#0a0f1d] border-t border-white/5 pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg font-bold text-white tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full max-w-[200px] py-4 bg-blue-600 text-white font-bold rounded-xl">
            Start Sync
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;