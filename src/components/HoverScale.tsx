import React from 'react';
import { motion } from 'framer-motion';

interface HoverScaleProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

const HoverScale: React.FC<HoverScaleProps> = ({
  children,
  className = '',
  scale = 1.05,
  duration = 0.3,
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
