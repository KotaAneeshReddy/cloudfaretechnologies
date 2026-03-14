import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Code,
  Rocket,
  CheckCircle,
  Sparkles,
  Users,
  Award,
  Globe,
  Layers,
  Cpu,
  Zap,
  Shield,
  Activity,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import Hero from '../components/Hero';
import { getTestimonials } from '../api';

// Client Logos
import AlliedLogo from '../assets/images/AlliedMobility.svg';
import ProximusLogo from '../assets/images/Proximus.svg';
import QuickLogo from '../assets/images/Quick.svg';
import SubhaLogo from '../assets/images/subha.jpg';
import DBLogo from '../assets/images/DeutscheBahn.png';

const Home = () => {
  const [testimonials, setTestimonials] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  React.useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <div className="pb-20 bg-bg-light">
      <Hero />

      {/* Stats Section - Premium Version */}
      <section className="relative z-10 -mt-16 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] shadow-premium border border-slate-100 p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <StatItem value="1,250+" label="Students Trained" color="text-accent-purple" />
          <StatItem value="100+" label="Job Placements" color="text-accent-blue-dark" />
          <StatItem value="70+" label="Active Interns" color="text-emerald-500" />
          <StatItem value="24/7" label="Expert Support" color="text-amber-500" />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding !pt-0">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-accent-purple/10 text-accent-purple-dark border border-accent-purple/20 mb-6 uppercase tracking-widest"
          >
            <Sparkles size={14} className="mr-2" />
            Our Mission
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-display">Our Core <span className="gradient-text italic">Pillars</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We've built a comprehensive ecosystem designed to accelerate your career
            from learning to leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PillarCard
            icon={<BookOpen size={28} className="text-white" />}
            title="Professional Training"
            desc="Master elite tech stacks with a curriculum designed by industry architects."
            color="bg-accent-purple"
            link="/trainings"
            delay={0.1}
          />
          <PillarCard
            icon={<Briefcase size={28} className="text-white" />}
            title="Career Placement"
            desc="Direct career paths within Cloudfare Technologies for our elite training graduates."
            color="bg-accent-blue"
            link="/careers"
            delay={0.2}
          />
          <PillarCard
            icon={<GraduationCap size={28} className="text-white" />}
            title="Industry Internships"
            desc="Work on live production systems and gain real-world project experience."
            color="bg-primary-navy"
            link="/internships"
            delay={0.3}
          />
        </div>
      </section>

      {/* Clients / Trusted By Section */}
      <section className="py-16 mb-16 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mb-12"
          >
            Empowering Careers at Global Leaders
          </motion.p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <LogoItem name="Allied Mobility" logo={AlliedLogo} delay={0.1} />
            <LogoItem name="Proximus" logo={ProximusLogo} delay={0.2} />
            <LogoItem name="Quick" logo={QuickLogo} delay={0.3} />
            <LogoItem name="Subha Developers" logo={SubhaLogo} delay={0.4} />
            <LogoItem name="Deutsche Bahn" logo={DBLogo} delay={0.5} />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dynamic Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-primary-navy rounded-3xl py-16 px-6 md:px-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple blur-[120px] rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold bg-white/10 text-accent-blue border border-white/20 mb-4 uppercase tracking-widest"
              >
                <Sparkles size={12} className="mr-2" />
                Success Records
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-display text-white px-2">Our Alumni <span className="gradient-text italic px-1">Impact</span></h2>
            </div>

            <div className="relative min-h-[220px] flex items-center">
              {loading ? (
                <div className="w-full text-center py-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue mx-auto"></div>
                </div>
              ) : testimonials.length > 0 ? (
                <>
                  <div className="w-full bg-white/5 backdrop-blur-sm rounded-[32px] p-6 md:p-8 border border-white/10">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="space-y-4 text-center"
                    >
                      {/* <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue p-0.5">
                          <div className="w-full h-full rounded-full bg-primary-navy flex items-center justify-center text-white overflow-hidden">
                            {testimonials[currentIndex].avatarUrl ? (
                              <img src={testimonials[currentIndex].avatarUrl} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                            ) : (
                              <Users size={20} />
                            )}
                          </div>
                        </div>
                      </div> */}

                      <div className="relative">
                        <Quote size={32} className="absolute -top-2 -left-2 text-white/5" />
                        <p className="text-base md:text-lg font-medium leading-relaxed italic text-slate-200 px-2 md:px-8">
                          "{testimonials[currentIndex].content}"
                        </p>
                      </div>

                      <div className="pt-2">
                        <div className="text-sm font-bold font-display text-white">{testimonials[currentIndex].name}</div>
                        <div className="text-accent-blue font-bold uppercase tracking-widest text-[9px] mt-1">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="absolute top-1/2 -left-6 md:-left-20 -translate-y-1/2">
                    <button onClick={prevTestimonial} className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                  </div>
                  <div className="absolute top-1/2 -right-6 md:-right-20 -translate-y-1/2">
                    <button onClick={nextTestimonial} className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex space-x-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-accent-blue w-6' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full text-center text-slate-400">No testimonials available yet.</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Standardized Width */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-premium border border-slate-100">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 font-display">Why Choose <span className="text-accent-blue">Cloudfare?</span></h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10">
                  We don't just teach code; we build professionals. Our methodical approach
                  is proven to produce elite software engineers.
                </p>
              </div>

              <div className="space-y-8">
                <FeatureItem
                  icon={<Globe className="text-accent-blue" />}
                  title="Global Standards"
                  desc="Our training matches the standards of top-tier silicon valley firms."
                />
                <FeatureItem
                  icon={<Award className="text-accent-purple" />}
                  title="Recognized Excellence"
                  desc="Our certifications are highly valued by recruiters across the globe."
                />
                <FeatureItem
                  icon={<Users className="text-emerald-500" />}
                  title="Internal Mobility"
                  desc="Direct pathways from training to high-impact engineering roles at Cloudfare."
                />
              </div>

              <Link to="/trainings" className="btn-primary !inline-flex !px-10 !py-4 group">
                <span>Start Your Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative card-premium !p-12 !bg-primary-navy text-white overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code size={180} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-10">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                      <Sparkles size={28} className="text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl font-display tracking-tight">Our Pedigree</div>
                      <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">Founded by Architects</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-slate-300 leading-relaxed">
                      Cloudfare Technologies was founded with a singular vision: to bridge the gap between academic theory and high-stakes production engineering.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      Our mentors bring decades of combined experience from Fortune 500 tech giants, ensuring you learn not just how to code, but how to build resilient systems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ value, label, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-2"
  >
    <div className={`text-4xl md:text-5xl font-black font-display tracking-tighter ${color}`}>{value}</div>
    <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">{label}</div>
  </motion.div>
);

const PillarCard = ({ icon, title, desc, color, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    whileHover={{ y: -12 }}
    className="card-premium group cursor-pointer relative overflow-hidden h-full"
  >
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-${color}/20 group-hover:scale-110 transition-transform duration-500`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 font-display">{title}</h3>
    <p className="text-slate-500 text-base leading-relaxed mb-8">{desc}</p>
    <Link to={link} className="text-accent-purple font-bold text-sm flex items-center space-x-2 group/link">
      <span className="group-hover/link:mr-2 transition-all">LEARN MORE</span>
      <ArrowRight size={16} />
    </Link>
  </motion.div>
);

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-6 group">
    <div className="mt-1 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-premium group-hover:scale-110 transition-all">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-xl mb-2 font-display">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const LogoItem = ({ name, icon, logo, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-3 text-slate-400 hover:text-primary-navy grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group"
  >
    <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-slate-50 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
      {logo ? (
        <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
      ) : (
        icon
      )}
    </div>
    <span className="font-display font-black tracking-tighter text-sm uppercase">{name}</span>
  </motion.div>
);

export default Home;
