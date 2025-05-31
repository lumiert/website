import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../styles/design-system';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}) => {
  const baseClasses = 'inline-block font-bold uppercase tracking-wider transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    primary: 'bg-purple text-white hover:bg-cyan border-2 border-purple hover:border-cyan',
    secondary: 'bg-transparent border-2 border-purple text-purple hover:border-cyan hover:text-cyan',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonContent = (
    <motion.span
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {buttonContent}
    </button>
  );
};

export default Button;
