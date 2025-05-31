import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  intensity = 0.2,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * intensity]);
  
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
