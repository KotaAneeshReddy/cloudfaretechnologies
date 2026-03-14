import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Zap, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white pt-24 pb-12 border-t border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 blur-[120px] rounded-full -translate-y-1/2"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple/10 blur-[120px] rounded-full -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg text-white">
                <Zap size={22} fill="currentColor" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">CLOUDFARE<span className="text-accent-blue">TECH</span></span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed">
              Empowering the next generation of tech professionals through elite training and
              strategic industry placements.
            </p>
            <div className="flex space-x-5">
              <SocialLink href="#" icon={<Linkedin size={22} />} />
              <SocialLink href="#" icon={<Twitter size={22} />} />
              <SocialLink href="#" icon={<Github size={22} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 font-display text-white">Fast Links</h3>
            <ul className="space-y-4">
              <FooterLink to="/trainings" label="Trainings" />
              <FooterLink to="/internships" label="Internships" />
              <FooterLink to="/careers" label="Careers" />
              <FooterLink to="/enterprise" label="Enterprise" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 font-display text-white">Specializations</h3>
            <ul className="space-y-4">
              <FooterLink to="#" label="Full Stack Java" />
              <FooterLink to="#" label="Generative AI" />
              <FooterLink to="#" label="Cloud & DevOps" />
              <FooterLink to="#" label="SAP ERP" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-8 font-display text-white">Get in Touch</h3>
            <ul className="space-y-6">
              <ContactItem icon={<Mail size={18} />} text="info@cloudfaretechnologies.com" />
              <ContactItem icon={<Phone size={18} />} text="+91 7259002535 / +91 7732075675" />
              <ContactItem icon={<MapPin size={18} />} text={<>SS tech park, SLN terminus 8th floor, Gachibowli, <br />Hyderabad, 500032</>} />
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Cloudfare Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a href={href} className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-accent-blue hover:text-white transition-all duration-300">
    {icon}
  </a>
);

const FooterLink = ({ to, label }) => (
  <li>
    <Link to={to} className="group flex items-center text-slate-400 hover:text-white transition-colors">
      <ArrowRight size={14} className="mr-0 opacity-0 -ml-4 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300" />
      <span>{label}</span>
    </Link>
  </li>
);

const ContactItem = ({ icon, text }) => (
  <li className="flex items-start space-x-4">
    <div className="mt-1 text-accent-blue bg-accent-blue/10 p-2 rounded-lg">{icon}</div>
    <span className="text-slate-400 leading-relaxed">{text}</span>
  </li>
);

export default Footer;
