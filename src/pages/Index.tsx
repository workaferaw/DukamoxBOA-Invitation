import React, { useState } from 'react';
import InvitationMessage from '@/components/InvitationMessage';
import Envelope from '@/components/Envelope';
import { motion } from "framer-motion";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cream relative">
      {/* Absolute centered seal */}
      <div 
        className="fixed left-1/2 -translate-x-1/2 w-14 h-14 z-[9999] pointer-events-none"
        style={{ 
          top: 'calc(50% + 32px)',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          className="w-full h-full bg-seal rounded-full flex items-center justify-center shadow-md"
          initial={{ scale: 1 }}
          animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: isOpen ? 0 : 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L14.5 8.5L20 9.5L16 13.5L17 19L12 16.5L7 19L8 13.5L4 9.5L9.5 8.5L12 3Z" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="fill-white stroke-white"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-xl mx-auto flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full flex flex-col items-center">
          <InvitationMessage isOpen={isOpen} />
          <Envelope isOpen={isOpen} onToggle={toggleEnvelope} />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
