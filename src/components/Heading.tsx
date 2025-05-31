import React from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
}) => {
  const baseClasses = {
    1: 'font-black text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight',
    2: 'font-bold text-4xl md:text-5xl tracking-tight',
    3: 'font-bold text-3xl md:text-4xl',
    4: 'font-bold text-2xl',
    5: 'font-bold text-xl',
  };
  
  const classes = `${baseClasses[level]} ${className}`;
  
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Component className={classes}>
        {children}
      </Component>
    </motion.div>
  );
};

export default Heading;
