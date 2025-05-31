import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../styles/design-system';

interface GrainContainerProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

const GrainContainer: React.FC<GrainContainerProps> = ({
  children,
  className = '',
  intensity = 'medium',
}) => {
  const intensityClasses = {
    light: 'before:opacity-5',
    medium: 'before:opacity-10',
    heavy: 'before:opacity-20',
  };
  
  const classes = `grain-overlay relative ${intensityClasses[intensity]} ${className}`;
  
  return (
    <motion.div
      className={classes}
      initial={animations.fadeIn.initial}
      animate={animations.fadeIn.animate}
      transition={animations.fadeIn.transition}
    >
      {children}
    </motion.div>
  );
};

export default GrainContainer;
