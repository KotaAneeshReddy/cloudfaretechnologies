import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Radio, Briefcase, Stethoscope, ArrowRight, Sparkles, Server, Globe } from 'lucide-react';

const Enterprise = () => {
  return (
    <div className="bg-bg-light min-h-screen">
      <section className="relative bg-primary-navy py-32 lg:py-48 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 text-accent-purple border border-white/10 mb-8 uppercase tracking-widest"
          >
            <Sparkles size={14} className="mr-2" />
            Architecting the Future
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-10 font-display tracking-tight leading-tight text-white overflow-visible">
            Elite Technology <br /><span className="gradient-text italic inline-block pr-2 md:pr-4">Solutions</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Leading enterprises trust Cloudfare Technologies to build scalable infrastructure,
            integrate advanced AI, and drive digital transformation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold font-display text-primary-navy mb-4">Industries we <span className="text-accent-blue">Serve</span></h2>
          <div className="w-24 h-1.5 bg-accent-blue rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Factory size={32} className="text-accent-blue" />}
            title="Manufacturing"
            desc="Driving Industry 4.0 with IoT-powered automation, digital twins, and AI-driven supply chain optimization."
            delay={0.1}
          />
          <ServiceCard
            icon={<Radio size={32} className="text-accent-purple" />}
            title="Telecom"
            desc="Building resilient 5G network architectures, OSS/BSS modernization, and high-scale edge computing solutions."
            delay={0.2}
          />
          <ServiceCard
            icon={<Briefcase size={32} className="text-emerald-500" />}
            title="Finance"
            desc="Secure fintech ecosystems, blockchain integration, and high-frequency trading platforms with zero-latency."
            delay={0.3}
          />
          <ServiceCard
            icon={<Stethoscope size={32} className="text-amber-500" />}
            title="Health Care"
            desc="Transforming patient outcomes through HIPAA-compliant AI, telehealth platforms, and predictive analytics."
            delay={0.4}
          />
        </div>

        {/* Vision Section */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-2xl border border-white/10"
              alt="Enterprise Technology"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-premium border border-slate-100 hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue">
                  <Server />
                </div>
                <div>
                  <div className="font-bold text-xl">99.99%</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 font-display">Transforming Businesses at <span className="text-accent-purple">Scale</span></h2>
            <ul className="space-y-6">
              <FeatureItem text="Global development centers with 24/7 support availability." />
              <FeatureItem text="Expert consultants from elite engineering backgrounds." />
              <FeatureItem text="Modern tech stack specializing in Java, Python, and SAP." />
              <FeatureItem text="Scalable infrastructure with multi-cloud deployment strategies." />
            </ul>
            <Link to="/contact" className="mt-12 btn-primary !inline-flex !px-10 !py-4 group">
              <span>Start an Enterprise Partnership</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc, delay }) => (
  <Link to="/contact" className="block h-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="card-premium text-center group cursor-pointer h-full"
    >
      <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 font-display">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8">{desc}</p>
      <div className="text-accent-purple font-bold text-xs flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span>ENQUIRE NOW</span>
        <ArrowRight size={14} />
      </div>
    </motion.div>
  </Link>
);

const FeatureItem = ({ text }) => (
  <li className="flex items-center space-x-4">
    <div className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
      <Globe size={14} />
    </div>
    <span className="text-slate-600 font-medium">{text}</span>
  </li>
);

export default Enterprise;
