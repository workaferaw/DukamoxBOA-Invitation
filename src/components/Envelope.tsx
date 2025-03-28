
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Letter from './Letter';

interface EnvelopeProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div 
        className="envelope"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={() => !isOpen && onToggle()}
        whileHover={!isOpen ? { y: -5, scale: 1.02 } : {}}
      >
        <div className={`envelope-flap ${isOpen ? 'flap-open' : ''}`}></div>
        <div className="envelope-body">
          <div 
            className="absolute inset-x-0 bottom-0 h-[85%] bg-envelopeShade/20 rounded-b-lg"
          ></div>
        </div>
        <Letter isOpen={isOpen} />
      </motion.div>
      {isOpen && (
        <motion.button
          className="mt-6 px-6 py-2 bg-gold hover:bg-goldLight text-white rounded-full font-medium shadow-md transition-colors duration-300 mx-auto block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          onClick={onToggle}
        >
          Close Invitation
        </motion.button>
      )}
    </div>
  );
};

export default Envelope;
