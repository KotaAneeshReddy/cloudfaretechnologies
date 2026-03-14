import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  Briefcase,
  Award,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { getCourseById } from '../api';
import EnrollForm from '../components/EnrollForm';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(0);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(id);
        const data = response.data;
        // Parse syllabus if it's a string
        if (data.syllabus && typeof data.syllabus === 'string') {
          try {
            data.syllabus = JSON.parse(data.syllabus);
          } catch (e) {
            console.error("Failed to parse syllabus JSON", e);
          }
        }
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-light">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent-blue shadow-lg"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-light p-4">
        <h2 className="text-3xl font-bold text-primary-navy mb-4">Course not found</h2>
        <Link to="/trainings" className="btn-primary">Back to Trainings</Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-light min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative bg-primary-navy pt-32 pb-24 lg:pt-34 lg:pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/trainings"
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white mb-12 transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={16} />
            <span>Back to All Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 text-accent-blue border border-white/10 mb-8 uppercase tracking-widest">
                <Sparkles size={14} className="mr-2" />
                Professional Training
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 font-display tracking-tight leading-tight text-white overflow-visible">
                {course.title.split(' ').slice(0, -1).join(' ')} <span className="gradient-text italic inline-block pr-4">{course.title.split(' ').pop()}</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                  <Clock className="text-accent-blue" size={20} />
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Duration</div>
                    <div className="font-bold">{course.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                  <ShieldCheck className="text-accent-purple" size={20} />
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Certification</div>
                    <div className="font-bold">Included</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsEnrollModalOpen(true)}
                className="btn-primary !px-12 !py-5 text-lg group"
              >
                <span>Enroll in Program</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-white/10 aspect-video">
                <img
                  src={course.image}
                  className="w-full h-full object-cover"
                  alt={course.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Syllabus Modules */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card-premium !p-10 md:!p-16">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-bold font-display mb-2">Program <span className="text-accent-blue">Syllabus</span></h2>
                  <p className="text-slate-500 font-medium">A comprehensive breakdown of your learning journey.</p>
                </div>
                <div className="p-4 bg-accent-blue/10 rounded-2xl text-accent-blue">
                  <BookOpen size={32} />
                </div>
              </div>

              <div className="space-y-6">
                {course.syllabus?.modules?.map((module, idx) => (
                  <motion.div
                    key={idx}
                    className={`rounded-3xl border transition-all duration-300 ${activeModule === idx ? 'border-accent-blue bg-slate-50 shadow-premium' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <button
                      onClick={() => setActiveModule(idx)}
                      className="w-full px-8 py-8 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center space-x-6">
                        <span className={`text-2xl font-black font-display ${activeModule === idx ? 'text-accent-blue' : 'text-slate-200'}`}>0{idx + 1}</span>
                        <h3 className="text-xl font-bold text-primary-navy tracking-tight">{module.title}</h3>
                      </div>
                      <ChevronRight className={`transition-transform duration-300 ${activeModule === idx ? 'rotate-90 text-accent-blue' : 'text-slate-300'}`} />
                    </button>

                    {activeModule === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="px-8 pb-10 border-t border-slate-100/50 pt-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {module.topics.map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-start space-x-3 text-slate-600 font-medium">
                              <CheckCircle2 size={18} className="text-accent-blue mt-0.5 shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="card-premium !p-10 sticky top-32">
              <h3 className="text-xl font-bold mb-8 font-display border-b border-slate-50 pb-4">Career Opportunities</h3>
              <div className="space-y-6">
                {course.careerOpportunities ? (
                  course.careerOpportunities.split(',').map((opportunity, oIdx) => (
                    <JobPath
                      key={oIdx}
                      role={opportunity.trim()}
                      company="Potential Career Path"
                    />
                  ))
                ) : (
                  <div className="text-slate-400 text-sm italic">Career paths details coming soon.</div>
                )}
              </div>

              <div className="mt-12 pt-10 border-t border-slate-100 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary-navy uppercase tracking-widest">Placements</div>
                    <div className="text-xs text-slate-400 font-medium">90% Success Rate</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-purple/10 text-accent-purple rounded-2xl flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary-navy uppercase tracking-widest">Industry Award</div>
                    <div className="text-xs text-slate-400 font-medium">Best EdTech 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnrollForm 
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName={course.title}
      />
    </div>
  );
};

const JobPath = ({ role, company }) => (
  <div className="flex items-center space-x-4 group cursor-default">
    <div className="w-2 h-10 bg-accent-blue rounded-full scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
    <div>
      <div className="font-bold text-primary-navy leading-tight">{role}</div>
      <div className="text-xs text-slate-400 font-medium">{company}</div>
    </div>
  </div>
);

export default CourseDetails;
