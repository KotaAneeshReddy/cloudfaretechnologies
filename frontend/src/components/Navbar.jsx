import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trainings', path: '/trainings' },
    { name: 'Careers', path: '/careers' },
    { name: 'Internships', path: '/internships' },
    { name: 'Enterprise', path: '/enterprise' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/'
      ? 'bg-primary-navy/95 backdrop-blur-lg border-b border-white/10 py-3'
      : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg text-white">
                <Zap size={22} fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black text-white tracking-[0.02em] uppercase font-display">
                  CLOUD<span className="text-accent-blue">FARE</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 tracking-[0.85em] uppercase mt-1">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg relative group ${location.pathname === link.path ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent-blue"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-white/10">
                <Link to="/contact" className="btn-primary py-2 px-6">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel !text-white border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 bg-primary-navy">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${location.pathname === link.path
                    ? 'bg-accent-blue/10 text-accent-blue'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center py-4 btn-primary mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
