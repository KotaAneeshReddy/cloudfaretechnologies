import { Calendar, MapPin, ArrowRight, GraduationCap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InternshipCard = ({ internship }) => {
  return (
    <Link to={`/internships/${internship.id}`} className="block h-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        viewport={{ once: true }}
        className="card-premium group flex flex-col h-full bg-white relative overflow-hidden cursor-pointer"
      >
        {/* Badge/Category */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-2 bg-accent-blue/10 rounded-xl text-accent-blue-dark">
            <GraduationCap size={20} />
          </div>
          <span className="text-[10px] font-black text-accent-blue uppercase tracking-widest bg-accent-blue/5 px-3 py-1 rounded-full border border-accent-blue/10">
            Limited Slots
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-primary-navy group-hover:text-accent-blue transition-colors font-display leading-tight">
            {internship.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
            {internship.description || "Join our elite engineering team and work on high-impact projects that define the future of technology."}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-50">
            <div className="flex items-center space-x-2 text-slate-500">
              <Clock size={16} className="text-slate-400" />
              <span className="text-xs font-semibold">{internship.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500">
              <MapPin size={16} className="text-slate-400" />
              <span className="text-xs font-semibold">{internship.location}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 pt-4">
          <div className="w-full btn-primary !rounded-xl group/btn !py-4 shadow-xl shadow-accent-purple/20 text-center flex items-center justify-center">
            <span>View Details</span>
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default InternshipCard;
