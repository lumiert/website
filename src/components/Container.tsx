import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../styles/design-system';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
}) => {
  const baseClasses = 'w-full mx-auto px-4';
  
  const sizeClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
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

export default Container;
