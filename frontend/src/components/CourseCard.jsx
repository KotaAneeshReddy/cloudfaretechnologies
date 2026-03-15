import React from 'react';
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course, onEnroll }) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="card-premium group flex flex-col h-full bg-white relative overflow-hidden"
    >
      {/* Course Image & Badge */}
      <div className="relative h-56 -mx-6 -mt-6 mb-8 overflow-hidden">
        <img 
          src={course.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"} 
          alt={course.title}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop";
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <div className="absolute top-5 right-5 bg-accent-blue-dark text-white px-4 py-1.5 rounded-xl text-xs font-bold shadow-xl backdrop-blur-md">
          {course.duration}
        </div>
        <div className="absolute bottom-5 left-5 text-white flex items-center space-x-2">
            <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
                <BookOpen size={16} />
            </div>
            <span className="text-sm font-semibold">Course</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-accent-blue transition-colors font-display leading-tight">{course.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between py-2 border-y border-slate-50">
          <div className="flex items-center space-x-2 text-slate-400">
            <Clock size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Flexible & Self-Paced</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-4 mt-auto grid grid-cols-2 gap-4">
        <button 
          onClick={() => navigate(`/course/${course.id}`)}
          className="btn-secondary !rounded-xl !py-3 !text-xs uppercase tracking-widest"
        >
          Details
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onEnroll();
          }}
          className="btn-primary !rounded-xl !py-3 !text-xs uppercase tracking-widest group/btn"
        >
          <span>Enroll</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
