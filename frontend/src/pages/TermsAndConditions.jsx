import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Hammer, Scale, AlertCircle } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="bg-bg-light min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] shadow-premium border border-slate-100 p-8 md:p-16"
        >
          <div className="flex items-center space-x-4 mb-10">
            <div className="p-4 bg-accent-purple/10 rounded-2xl text-accent-purple">
              <FileText size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold font-display">Terms & <span className="text-accent-purple">Conditions</span></h1>
              <p className="text-slate-400 font-medium">Last updated: March 14, 2026</p>
            </div>
          </div>

          <div className="space-y-12 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <Hammer size={20} className="mr-3 text-accent-blue" />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this Website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <Scale size={20} className="mr-3 text-emerald-500" />
                2. Intellectual Property Rights
              </h2>
              <p>
                The Website and its original content, features, and functionality are owned by Cloudfare Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <AlertCircle size={20} className="mr-3 text-amber-500" />
                3. User Obligations
              </h2>
              <p className="mb-4">
                You agree to use the Website only for lawful purposes. You are prohibited from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using any device, software, or routine that interferes with the proper working of the Website.</li>
                <li>Introducing any viruses, Trojan horses, worms, or other material which is malicious or technologically harmful.</li>
                <li>Attempting to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website.</li>
                <li>Conducting any systematic or automated data collection activities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-navy mb-4 font-display flex items-center">
                <FileText size={20} className="mr-3 text-accent-purple" />
                4. Training Programs & Placements
              </h2>
              <p>
                Enrollment in our training programs is subject to eligibility criteria and payment of fees. While Cloudfare Technologies provides elite training and career guidance, placement is not guaranteed and depends on individual performance and industry demand.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-100 mt-10">
              <p className="text-sm text-slate-400 italic text-center">
                If you have any questions regarding these Terms & Conditions, please contact us at info@cloudfaretechnologies.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
