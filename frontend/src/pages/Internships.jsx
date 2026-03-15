import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getInternships } from '../api';
import InternshipCard from '../components/InternshipCard';

const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await getInternships();
        setInternships(response.data);
      } catch (error) {
        console.error('Error fetching internships:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  return (
    <div className="bg-bg-light min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative bg-primary-navy pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 text-accent-blue border border-white/10 mb-8 uppercase tracking-widest"
          >
            <Sparkles size={14} className="mr-2" />
            Launch Your Career
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-8 font-display tracking-tight pr-10 overflow-visible"
          >
            Industry-Ready <span className="gradient-text italic inline-block pr-4">Internships</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Bridge the gap between academia and industry. Gain practical experience 
            on production-grade software with structured mentorship.
          </motion.p>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold font-display italic">Why Intern with <span className="text-accent-blue">Cloudfare?</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <InternBenefit 
                icon={<Globe className="text-accent-blue" />}
                title="Global Projects"
                desc="Work on actual software systems used by millions of users worldwide."
              />
              <InternBenefit 
                icon={<Users className="text-accent-purple" />}
                title="Senior Mentors"
                desc="Daily 1-on-1 sessions with senior engineers and architects."
              />
              <InternBenefit 
                icon={<Award className="text-yellow-500" />}
                title="Elite Certification"
                desc="Receive an industry-recognized completion badge and certificate."
              />
              <InternBenefit 
                icon={<CheckCircle2 className="text-green-500" />}
                title="Direct Hiring"
                desc="90% of our high-performing interns receive full-time job offers."
              />
            </div>
        </div>
      </section>

      {/* Main Opportunities Grid */}
      <section className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">Active Internship <span className="text-accent-blue">Tracks</span></h3>
                <p className="text-slate-500 font-medium">Join our upcoming cohorts and start your professional journey with the industry's best.</p>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 text-sm font-bold uppercase tracking-widest bg-slate-100/50 px-4 py-2 rounded-xl">
                <Users size={16} />
                <span>250+ Interns Enrolled</span>
            </div>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-96 space-y-4">
             <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent-blue shadow-lg"></div>
             <p className="text-slate-400 font-medium animate-pulse">Loading Opportunities...</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {internships.length > 0 ? (
              internships.map(internship => (
                <InternshipCard key={internship.id} internship={internship} />
              ))
            ) : (
              <div className="col-span-full card-premium text-center py-24 bg-slate-50 border-dashed">
                <div className="p-4 bg-white w-20 h-20 rounded-full mx-auto mb-6 shadow-xl flex items-center justify-center text-slate-300">
                    <GraduationCap size={40} />
                </div>
                <h4 className="text-xl font-bold text-primary-navy mb-2">New Cohorts Coming Soon</h4>
                <p className="text-slate-400 italic">We're currently tailoring new internship tracks. Stay tuned!</p>
              </div>
            )}
          </motion.div>
        )}
      </section>
    </div>
  );
};

const InternBenefit = ({ icon, title, desc }) => (
  <div className="space-y-4 group flex flex-col items-start text-left">
    <div className="w-16 h-16 bg-white rounded-2xl shadow-premium border border-slate-50 flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-2">
        <h4 className="font-bold text-xl font-display group-hover:text-accent-blue transition-colors tracking-tight">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Internships;
