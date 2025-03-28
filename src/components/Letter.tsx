import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

interface LetterProps {
  isOpen: boolean;
}

const Letter: React.FC<LetterProps> = ({ isOpen }) => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay showing content until letter animation completes - make it faster
      const timer = setTimeout(() => {
        setContentVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
    }
  }, [isOpen]);

  return (
    <div className={`letter gold-border ${isOpen ? 'letter-open' : ''}`}>
      <motion.div
        className={`letter-content ${contentVisible ? 'letter-content-visible' : ''}`}
        initial={false}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-full"
        >
          <h1 className="text-center mb-6">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2">Dukamo</span>
            <span className="block text-3xl md:text-4xl font-['Cormorant_Garamond'] font-semibold tracking-wider text-textPrimary">
              Join Us for the Soft Opening of Our Brand-New Branch!
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-center text-textSecondary mb-8 italic leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          We're thrilled to invite you to the grand (soft) opening of our newest branch, in partnership with Bank of Abyssinia
        </motion.p>

        <motion.div
          className="bg-white/50 backdrop-blur-sm p-6 rounded-lg w-full max-w-xs mx-auto mb-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#D4AF37" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-textSecondary uppercase tracking-wider">Date & Time</p>
              <p className="text-textPrimary font-medium">Tuesday, April 2, 2025 • 3:00 PM (9:00 LT)</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="#D4AF37" strokeWidth="1.5"/>
                <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="#D4AF37" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-textSecondary uppercase tracking-wider">Location</p>
              <p className="text-textPrimary font-medium">Niyala Insurance Building Ground Floor</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-textPrimary mb-4">What's Special About This Branch?</h2>
          <ul className="text-left space-y-3 text-textSecondary">
            <li>• Cashless & Cutting-Edge: Experience the future of hospitality with our fully cashless services</li>
            <li>• Prime Location: Nestled in the bustling financial hub</li>
            <li>• Exclusive Perks: Be the first to explore our innovative services and enjoy special opening-day offers</li>
          </ul>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <p className="text-sm text-textSecondary mb-3">RSVP: Let us know you're coming! Reply to this message or call us at (+251)940075265</p>
          <p className="text-sm text-textSecondary italic">We can't wait to celebrate this milestone with you.</p>
          <p className="text-sm text-textSecondary mt-2">Come see why Dukamo is anything but ordinary.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Letter;
