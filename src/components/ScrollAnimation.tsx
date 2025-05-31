import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.1,
  once = true,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  });

  const animations = {
    fadeIn: {
      visible: { opacity: 1, transition: { duration, delay } },
      hidden: { opacity: 0 },
    },
    slideUp: {
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
      hidden: { opacity: 0, y: 50 },
    },
    slideInLeft: {
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
      hidden: { opacity: 0, x: -100 },
    },
    slideInRight: {
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
      hidden: { opacity: 0, x: 100 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
