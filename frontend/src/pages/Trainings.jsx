import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../api';
import { Sparkles } from 'lucide-react';

const Trainings = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="bg-bg-light min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-accent-purple/10 text-accent-purple-dark border border-accent-purple/20 mb-6 uppercase tracking-widest"
          >
            <Sparkles size={14} className="mr-2" />
            Empowering Your Future
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-primary-navy mb-8 font-display leading-[1.1] overflow-visible pr-10"
          >
            Elite Training <span className="gradient-text italic inline-block pr-4">Programs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl leading-relaxed"
          >
            Master the most in-demand technologies with our industry-vetted curriculum, 
            hands-on projects, and mentorship from top silicon valley architects.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-96 space-y-4">
             <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent-blue shadow-lg"></div>
             <p className="text-slate-400 font-medium animate-pulse">Loading Programs...</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {courses.length > 0 ? (
              courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="col-span-full card-premium text-center py-24">
                <p className="text-slate-400 text-lg italic">We're tailoring new courses for you. Stay tuned!</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Trainings;
