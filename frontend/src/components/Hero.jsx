import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-primary-navy overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-40">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-accent-purple/15 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-5 py-2 rounded-2xl text-sm font-semibold bg-white/5 text-accent-blue border border-white/10 mb-10 backdrop-blur-sm shadow-xl">
              <Sparkles size={16} className="mr-2 text-yellow-500" />
              Empowering the Next Generation of Tech Leaders
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter mb-10 leading-[1.1] overflow-visible"
          >
            Elevate Your Career <br />
            <span className="gradient-text italic inline-block pr-2 md:pr-4">Through Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 leading-relaxed mb-16 font-medium"
          >
            Join Cloudfare Technologies. Master elite skills, secure high-impact roles, 
            and transform your future with our industry-leading training and placement ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8"
          >
            <Link to="/trainings" className="w-full sm:w-auto btn-primary !px-10 !py-4 text-lg group">
              <GraduationCap size={24} className="group-hover:rotate-12 transition-transform" />
              <span>Explore Programs</span>
            </Link>
            <Link to="/careers" className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center space-x-3 group">
              <Briefcase size={22} className="group-hover:-translate-y-1 transition-transform" />
              <span>Job Openings</span>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
