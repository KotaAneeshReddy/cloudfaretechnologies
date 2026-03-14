import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Clock, 
  Building2, 
  CheckCircle2, 
  Share2, 
  Calendar,
  ShieldCheck,
  Target,
  Sparkles,
  Copy,
  CheckCircle
} from 'lucide-react';
import { getJobById, getInternshipById } from '../api';
import ApplyForm from '../components/ApplyForm';

const JobDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const isInternship = location.pathname.includes('/internships/');
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [shareSuccess, setShareSuccess] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: `Cloudfare Technologies - ${data.title}`,
            text: `Check out this ${isInternship ? 'internship' : 'job'} opening at Cloudfare Technologies: ${data.title}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setShareSuccess(true);
                setTimeout(() => setShareSuccess(false), 2000);
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };
    const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);

    useEffect(() => {
        const checkApplied = () => {
            const applied = JSON.parse(localStorage.getItem('appliedRoles') || '{}');
            const key = isInternship ? `internship_${id}` : `job_${id}`;
            setIsAlreadyApplied(!!applied[key]);
        };
        checkApplied();
    }, [id, isInternship, isApplyModalOpen]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = isInternship 
                    ? await getInternshipById(id)
                    : await getJobById(id);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [id, isInternship]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-blue"></div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-20 space-y-6">
                <h2 className="text-3xl font-bold text-primary-navy font-display">Opening Not Found</h2>
                <Link to={isInternship ? "/internships" : "/careers"} className="btn-secondary">
                    <ArrowLeft size={18} />
                    <span>Back to {isInternship ? 'Internships' : 'Careers'}</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-bg-light min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link 
                    to={isInternship ? "/internships" : "/careers"} 
                    className="inline-flex items-center space-x-2 text-slate-500 hover:text-accent-blue font-bold text-sm mb-12 transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>BACK TO {isInternship ? 'INTERNSHIPS' : 'CAREERS'}</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-100"
                        >
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 bg-accent-blue/10 text-accent-blue-dark text-xs font-black rounded-full uppercase tracking-widest border border-accent-blue/10">
                                    {isInternship ? 'Internship Program' : (data.type || 'Full Time')}
                                </span>
                                <span className="px-4 py-1.5 bg-accent-purple/10 text-accent-purple text-xs font-black rounded-full uppercase tracking-widest border border-accent-purple/10 flex items-center">
                                    <Sparkles size={12} className="mr-2" />
                                    Urgent Opening
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-primary-navy font-display leading-tight mb-6">
                                {data.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 mb-12">
                                <InfoBadge icon={<Building2 size={18} />} text={isInternship ? "Cloudfare Technologies" : data.company} />
                                <InfoBadge icon={<MapPin size={18} />} text={data.location} />
                                <InfoBadge icon={<Clock size={18} />} text={isInternship ? data.duration : (data.type || 'Full-time')} />
                            </div>

                            <div className="space-y-10">
                                <section>
                                    <h3 className="text-2xl font-bold text-primary-navy font-display mb-6 flex items-center">
                                        <div className="w-8 h-8 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mr-4">
                                            <Target size={18} />
                                        </div>
                                        Role Overview
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                                        {data.description}
                                    </p>
                                </section>

                                {data.responsibilities && (
                                    <section>
                                        <h3 className="text-2xl font-bold text-primary-navy font-display mb-6 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-accent-purple/10 text-accent-purple flex items-center justify-center mr-4">
                                                <Briefcase size={18} />
                                            </div>
                                            Key Responsibilities
                                        </h3>
                                        <ul className="space-y-4">
                                            {data.responsibilities.split('.').filter(r => r.trim()).map((resp, i) => (
                                                <motion.li 
                                                    key={i} 
                                                    initial={{ opacity: 0, x: -10 }} 
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start space-x-4 text-slate-600 font-medium"
                                                >
                                                    <CheckCircle2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
                                                    <span>{resp.trim()}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {data.requirements && (
                                    <section>
                                        <h3 className="text-2xl font-bold text-primary-navy font-display mb-6 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mr-4">
                                                <ShieldCheck size={18} />
                                            </div>
                                            Requirements
                                        </h3>
                                        <ul className="space-y-4">
                                            {data.requirements.split('.').filter(r => r.trim()).map((req, i) => (
                                                <motion.li 
                                                    key={i} 
                                                    initial={{ opacity: 0, x: -10 }} 
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start space-x-4 text-slate-600 font-medium"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-accent-blue/20 text-accent-blue flex items-center justify-center mt-1 flex-shrink-0 text-[10px] font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <span>{req.trim()}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </section>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-primary-navy rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/20 blur-[60px] rounded-full -mr-16 -mt-16"></div>
                             
                             <h3 className="text-2xl font-bold font-display mb-6 relative z-10">Interested?</h3>
                             <p className="text-slate-300 mb-8 relative z-10 font-medium">
                                Join Cloudfare and build high-scale engineering systems for the global tech market.
                             </p>
                             
                             <button 
                                onClick={() => !isAlreadyApplied && setIsApplyModalOpen(true)}
                                disabled={isAlreadyApplied}
                                className={`w-full btn-primary !py-4 shadow-xl shadow-black/20 ${
                                    isAlreadyApplied 
                                    ? "!bg-green-500 !text-white cursor-default" 
                                    : "!bg-white !text-primary-navy hover:!bg-slate-100"
                                }`}
                             >
                                {isAlreadyApplied ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <CheckCircle size={18} />
                                        <span>Already Applied</span>
                                    </div>
                                ) : "Apply for this Position"}
                             </button>

                             <button 
                                onClick={handleShare}
                                className="w-full mt-4 flex items-center justify-center space-x-2 text-slate-400 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest group"
                             >
                                {shareSuccess ? (
                                    <>
                                        <CheckCircle size={16} className="text-green-500" />
                                        <span className="text-green-500">Link Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Share2 size={16} className="group-hover:scale-110 transition-transform" />
                                        <span>Share Opening</span>
                                    </>
                                )}
                             </button>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft space-y-6">
                            <h4 className="font-bold text-primary-navy font-display flex items-center">
                                <Calendar size={18} className="mr-3 text-accent-blue" />
                                Hiring Timeline
                            </h4>
                            <div className="space-y-4">
                                <TimelineStep date="Active" label="Application Window" active />
                                <TimelineStep date="Phase 1" label="Technical Interview" />
                                <TimelineStep date="Phase 2" label="Architect Interview" />
                                <TimelineStep date="Final" label="Offer Letter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ApplyForm 
                isOpen={isApplyModalOpen} 
                onClose={() => setIsApplyModalOpen(false)} 
                jobTitle={data.title}
                jobId={!isInternship ? data.id : null}
                internshipId={isInternship ? data.id : null}
            />
        </div>
    );
};

const InfoBadge = ({ icon, text }) => (
    <div className="flex items-center space-x-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl">
        <div className="text-slate-400">{icon}</div>
        <span className="font-bold text-slate-600 text-sm">{text}</span>
    </div>
);

const TimelineStep = ({ date, label, active }) => (
    <div className="flex items-center justify-between">
        <span className={`text-xs font-black uppercase tracking-widest ${active ? 'text-accent-blue' : 'text-slate-400'}`}>{date}</span>
        <span className={`text-sm font-bold ${active ? 'text-primary-navy' : 'text-slate-500'}`}>{label}</span>
    </div>
);

export default JobDetails;
