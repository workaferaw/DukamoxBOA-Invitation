
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
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
        whileHover={!isOpen ? { y: -5, scale: 1.02 } : {}}
      >
        <div className={`envelope-flap ${isOpen ? 'flap-open' : ''}`}></div>
        <div className="envelope-body">
          <div 
            className="absolute inset-x-0 bottom-0 h-[85%] bg-envelopeShade/20 rounded-b-lg"
          ></div>
        </div>

        {/* Clickable Seal */}
        {!isOpen && (
          <motion.div
            className="absolute w-14 h-14 bg-seal rounded-full flex items-center justify-center z-[100] cursor-pointer hover:scale-105 transition-transform"
            style={{ 
              top: 'calc(50% - 20px)',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            onClick={onToggle}
            whileHover={{ scale: 1.1 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L14.5 8.5L20 9.5L16 13.5L17 19L12 16.5L7 19L8 13.5L4 9.5L9.5 8.5L12 3Z" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="fill-white stroke-white"
              />
            </svg>
          </motion.div>
        )}
        
        <AnimatePresence>
          {isOpen && <Letter isOpen={isOpen} />}
        </AnimatePresence>
      </motion.div>
      
      {isOpen && (
        <motion.button
          className="mt-6 px-6 py-2 bg-gold hover:bg-goldLight text-white rounded-full font-medium shadow-md transition-colors duration-300 mx-auto block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          onClick={onToggle}
        >
          Close Invitation
        </motion.button>
      )}
    </div>
  );
};

export default Envelope;
