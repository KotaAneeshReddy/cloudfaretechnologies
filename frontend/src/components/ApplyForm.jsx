import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send, CheckCircle, User, Mail, Phone, FileText } from 'lucide-react';
import { submitApplication } from '../api';

const ApplyForm = ({ isOpen, onClose, jobTitle, jobId, internshipId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";
    
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
        newErrors.phone = "Invalid phone number";
    } else if (!formData.phone) {
        newErrors.phone = "Phone number is required";
    }
    
    if (!resumeFile) {
        newErrors.resume = "Resume is required";
    } else if (resumeFile.size > 3 * 1024 * 1024) {
        newErrors.resume = "File size must be less than 3MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const applicationData = {
        ...formData,
        job: jobId ? { id: jobId } : null,
        internship: internshipId ? { id: internshipId } : null
      };

      const data = new FormData();
      data.append('application', new Blob([JSON.stringify(applicationData)], { type: 'application/json' }));
      data.append('resume', resumeFile);

      await submitApplication(data);
      
      // Persist applied status
      const type = jobId ? 'job' : 'internship';
      const typeId = jobId || internshipId;
      const applied = JSON.parse(localStorage.getItem('appliedRoles') || '{}');
      applied[`${type}_${typeId}`] = true;
      localStorage.setItem('appliedRoles', JSON.stringify(applied));

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', coverLetter: '' });
        setResumeFile(null);
        setErrors({});
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-navy/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {isSuccess ? (
              <div className="p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-bold text-primary-navy font-display">Application Sent!</h2>
                <p className="text-slate-500 text-lg">
                  Thank you for applying for the <strong>{jobTitle}</strong> position. Our team will review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <div>
                    <h2 className="text-2xl font-bold text-primary-navy font-display">Apply for Role</h2>
                    <p className="text-accent-blue font-bold text-sm uppercase tracking-wider mt-1">{jobTitle}</p>
                  </div>
                  <button onClick={onClose} className="p-2 hover:bg-white hover:shadow-lg rounded-xl transition-all text-slate-400 hover:text-primary-navy">
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                        <User size={14} className="mr-2" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-accent-blue outline-none transition-all font-medium"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                        <Mail size={14} className="mr-2" /> Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-accent-blue outline-none transition-all font-medium"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                      <Phone size={14} className="mr-2" /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 99887 76655"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-accent-blue outline-none transition-all font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center">
                      <Upload size={14} className="mr-2" /> Resume / CV (PDF)
                    </label>
                    <div className="relative group/upload">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        onChange={(e) => setResumeFile(e.target.files[0])}
                      />
                      <div className="w-full px-4 py-4 border-2 border-dashed border-slate-200 rounded-2xl group-hover/upload:border-accent-blue group-hover/upload:bg-accent-blue/5 transition-all flex flex-col items-center justify-center text-center">
                        <Upload size={24} className="text-slate-400 mb-2 group-hover/upload:text-accent-blue" />
                        <p className="text-slate-500 font-bold text-sm">
                          {resumeFile ? resumeFile.name : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-slate-400 text-xs mt-1 font-medium">PDF, DOC up to 3MB</p>
                      </div>
                      {errors.resume && <p className="text-red-500 text-xs font-bold mt-2 text-center">{errors.resume}</p>}
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full btn-primary !py-4 !rounded-2xl shadow-xl shadow-accent-blue/20 mt-4 group"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mx-auto"></div>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyForm;
