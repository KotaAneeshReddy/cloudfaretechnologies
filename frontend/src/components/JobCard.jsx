import React from 'react';
import { MapPin, Briefcase, ArrowRight, Building2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const JobCard = ({ job }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-premium group hover:bg-slate-50/50"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-primary-navy group-hover:text-accent-blue-dark transition-colors font-display">
              {job.title}
            </h3>
            <span className="inline-flex items-center px-3 py-1 bg-accent-blue/10 text-accent-blue-dark text-xs font-bold rounded-lg uppercase tracking-wider">
              {job.type}
            </span>
          </div>
          
          <div className="flex items-center space-x-3 text-slate-600 font-semibold mb-6">
            <Building2 size={18} className="text-slate-400" />
            <span>{job.company}</span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center space-x-2 text-slate-500 bg-slate-100/50 px-3 py-1.5 rounded-lg border border-slate-100">
              <MapPin size={16} className="text-accent-purple" />
              <span className="font-medium">{job.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500 bg-slate-100/50 px-3 py-1.5 rounded-lg border border-slate-100">
              <Briefcase size={16} className="text-accent-blue" />
              <span className="font-medium">{job.category || 'Engineering'}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500">
              <Clock size={16} className="text-slate-400" />
              <span className="font-medium italic">Apply before 30th March</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
            <button className="btn-primary !px-8 group/btn whitespace-nowrap w-full lg:w-auto">
                <span>View Details</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
