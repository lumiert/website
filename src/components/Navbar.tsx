import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../styles/design-system';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Artes', path: '/artes' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Comunidade', path: '/comunidade' },
    { name: 'Contato', path: '/contato' },
  ];
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-background border-b-2 border-text ${className}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/LogoHorizontal.webp" alt="Lumiert" className="h-10" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="font-medium uppercase tracking-wider hover:text-purple transition-colors duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-text mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden bg-background border-t-2 border-text overflow-hidden`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="block py-3 font-medium uppercase tracking-wider hover:text-purple transition-colors duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
