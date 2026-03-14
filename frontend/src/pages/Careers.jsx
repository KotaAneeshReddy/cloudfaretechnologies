import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Briefcase, MapPin, Sparkles } from 'lucide-react';
import JobCard from '../components/JobCard';
import { getJobs } from '../api';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-bg-light min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-accent-blue/10 text-accent-blue-dark border border-accent-blue/20 mb-6 uppercase tracking-widest"
          >
            <Sparkles size={14} className="mr-2" />
            Direct Hiring Track
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-primary-navy mb-8 font-display leading-[1.1]"
          >
            Scale Your <span className="gradient-text italic">Career</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl leading-relaxed"
          >
            Explore high-impact opportunities directly within Cloudfare Technologies 
            and lead the next wave of digital transformation.
          </motion.p>
        </div>

        {/* Dynamic Search & Filter */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-3 rounded-2xl shadow-premium border border-slate-100 flex flex-col md:flex-row gap-3 items-center"
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by role, company, or skills..." 
                className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-accent-blue transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn-secondary !px-8 !py-4 w-full md:w-auto">
              <Filter size={20} />
              <span>Filters</span>
            </button>
            <button className="btn-primary !px-10 !py-4 w-full md:w-auto">
              Find Jobs
            </button>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
             <QuickStat icon={<Briefcase size={16} />} text="1,200+ Active Roles" />
             <QuickStat icon={<MapPin size={16} />} text="Remote & Hybrid Options" />
             <QuickStat icon={<Sparkles size={16} />} text="100% In-House Hiring" />
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 space-y-4">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-blue"></div>
             <p className="text-slate-400 font-medium">Fetching openings...</p>
          </div>
        ) : (
          <div className="space-y-8 max-w-5xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="text-center py-24 card-premium bg-slate-50/50">
                <p className="text-slate-400 text-lg">No matching roles found. Try adjusting your search.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const QuickStat = ({ icon, text }) => (
    <div className="flex items-center space-x-2 text-slate-400 text-sm font-semibold">
        {icon}
        <span>{text}</span>
    </div>
);

export default Careers;
