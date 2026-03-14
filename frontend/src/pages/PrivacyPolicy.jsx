import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-bg-light min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] shadow-premium border border-slate-100 p-8 md:p-16"
        >
          <div className="flex items-center space-x-4 mb-10">
            <div className="p-4 bg-accent-blue/10 rounded-2xl text-accent-blue">
              <Shield size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold font-display">Privacy <span className="text-accent-blue">Policy</span></h1>
              <p className="text-slate-400 font-medium">Last updated: March 14, 2026</p>
            </div>
          </div>

          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <Eye size={20} className="mr-3 text-accent-purple" />
                1. Introduction
              </h2>
              <p>
                At Cloudfare Technologies, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <Lock size={20} className="mr-3 text-accent-blue" />
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect several types of information from and about users of our Website, including information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, and telephone number ("personal information").</li>
                <li>That is about you but individually does not identify you, such as your domain name and IP address.</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <FileText size={20} className="mr-3 text-emerald-500" />
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                <li>In any other way we may describe when you provide the information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <Shield size={20} className="mr-3 text-amber-500" />
                4. Data Security
              </h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-100 mt-10">
              <p className="text-sm text-slate-400 italic text-center">
                If you have any questions about this Privacy Policy, please contact us at info@cloudfaretechnologies.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
