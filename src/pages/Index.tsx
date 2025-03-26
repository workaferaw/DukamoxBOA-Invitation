
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
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <InvitationMessage isOpen={isOpen} />
        <Envelope isOpen={isOpen} onToggle={toggleEnvelope} />
      </motion.div>
    </div>
  );
};

export default Index;
