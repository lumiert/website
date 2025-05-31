import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  intensity = 'medium',
}) => {
  const intensityValues = {
    light: {
      offset1: '1px',
      offset2: '-1px',
      opacity: '0.5'
    },
    medium: {
      offset1: '2px',
      offset2: '-2px',
      opacity: '0.7'
    },
    heavy: {
      offset1: '3px',
      offset2: '-3px',
      opacity: '0.9'
    }
  };
  
  const { offset1, offset2, opacity } = intensityValues[intensity];
  
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute top-0 left-0 text-cyan animate-glitch-1" 
        style={{ left: offset1, opacity }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 text-purple animate-glitch-2" 
        style={{ left: offset2, opacity }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;
