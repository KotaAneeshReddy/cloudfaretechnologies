import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-bg-light min-h-screen">
            {/* Header */}
            <section className="bg-primary-navy py-32 lg:py-48 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold mb-8 font-display tracking-tight text-white overflow-visible"
                    >
                        Get In <span className="gradient-text italic inline-block pr-4">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you're looking for training, a career opportunity, or enterprise solutions,
                        our experts are here to help.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding -mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                    {/* Info Side */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="card-premium !p-10 lg:!p-16 h-full">
                            <div className="flex items-center space-x-3 text-accent-purple mb-8">
                                <MapPin size={20} />
                                <span className="font-bold text-sm uppercase tracking-widest">Contact Information</span>
                            </div>
                            <h3 className="text-4xl font-bold mb-12 font-display leading-[1.1]">Reach Our <span className="text-accent-purple">Teams.</span></h3>

                            <div className="space-y-10">
                                <ContactDetail
                                    icon={<Mail className="text-accent-blue" />}
                                    title="Email Us"
                                    text="info@cloudfaretechnologies.com"
                                    sub="We'll respond within 24 hours"
                                />
                                <ContactDetail
                                    icon={<Phone className="text-accent-purple" />}
                                    title="Call Us"
                                    text="+91 7259002535 / +91 7732075675"
                                    sub="Mon-Fri, 9am - 6pm IST"
                                />
                                <ContactDetail
                                    icon={<MapPin className="text-emerald-500" />}
                                    title="Visit Us"
                                    text={<>SS tech park, SLN terminus 8th floor, Gachibowli, <br />Hyderabad, 500032</>}
                                    sub="Telangana"
                                />
                            </div>

                            {/* <div className="mt-16 pt-10 border-t border-slate-100">
                                <div className="flex items-center space-x-2 text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">
                                    <Globe size={16} />
                                    <span>Social Connect</span>
                                </div>
                                <div className="flex space-x-4">
                                    <SocialIcon icon="IN" />
                                    <SocialIcon icon="TW" />
                                    <SocialIcon icon="GH" />
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-3">
                        <div className="card-premium !p-10 lg:!p-16 h-full">
                            <div className="flex items-center space-x-3 text-accent-blue mb-8">
                                <MessageSquare size={20} />
                                <span className="font-bold text-sm uppercase tracking-widest">Send a Message</span>
                            </div>
                            <h3 className="text-4xl font-bold mb-12 font-display leading-[1.1]">Let's Start a <span className="text-accent-blue">Conversation.</span></h3>

                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-accent-blue outline-none transition-all font-medium" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-accent-blue outline-none transition-all font-medium" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Subject</label>
                                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-accent-blue outline-none transition-all font-medium appearance-none">
                                        <option>Training Inquiry</option>
                                        <option>Job Opportunity</option>
                                        <option>Internship Program</option>
                                        <option>Enterprise Solutions</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Message</label>
                                    <textarea rows="5" placeholder="How can we help you?" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-accent-blue outline-none transition-all font-medium"></textarea>
                                </div>

                                <button className="btn-primary !w-full !py-5 text-lg group shadow-2xl shadow-accent-purple/30">
                                    <span>Send Message</span>
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>

                                <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm font-medium">
                                    <Clock size={16} />
                                    <span>Average response time: 2 hours</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactDetail = ({ icon, title, text, sub }) => (
    <div className="flex items-start space-x-6 group py-2 transition-all duration-300">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-premium border border-slate-100 flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white group-hover:scale-110 transition-all duration-300">
            {icon}
        </div>
        <div className="flex-1 pt-1 min-w-0">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 font-display">{title}</h4>
            <div className="text-[14px] font-bold text-primary-navy mb-1 leading-tight break-all md:break-words">{text}</div>
            <div className="text-slate-400 text-[13px] font-medium leading-relaxed">{sub}</div>
        </div>
    </div>
);

const SocialIcon = ({ icon }) => (
    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-black text-slate-400 hover:bg-accent-blue hover:text-white hover:scale-110 transition-all cursor-pointer border border-slate-100">
        {icon}
    </div>
);

export default Contact;
