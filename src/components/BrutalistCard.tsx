import React from 'react';
import { motion } from 'framer-motion';

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  const hoverClasses = hoverEffect ? 'transition-all duration-300 hover:translate-y-[-2px]' : '';
  
  const classes = `bg-background border-2 border-text ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default BrutalistCard;
