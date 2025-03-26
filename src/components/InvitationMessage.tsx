
import React from 'react';
import { motion } from "framer-motion";

interface InvitationMessageProps {
  isOpen: boolean;
}

const InvitationMessage: React.FC<InvitationMessageProps> = ({ isOpen }) => {
  return (
    <motion.div 
      className={`text-center mb-8 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 0 : 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary mb-2 font-['Cormorant_Garamond'] tracking-wide">
        You&rsquo;re Invited!
      </h1>
      <p className="text-lg md:text-xl text-textSecondary italic">
        Click the envelope to open
      </p>
    </motion.div>
  );
};

export default InvitationMessage;
