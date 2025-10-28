import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useLenis from '../../hooks/useLenis';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

const mobileMenuContainerVariants: Variants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const mobileNavVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        }
    }
};

const mobileNavItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: 'easeOut' },
    }
};

const mobileHeaderItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: 'easeOut', delay: 0.1 }
    }
}


export const Header: React.FC = () => {
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const isProgrammaticScroll = useRef(false);

  // Effect for header background based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use IntersectionObserver to set active section for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      }
    );

    const elements = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
    elements.forEach(el => observer.observe(el!));

    return () => {
      elements.forEach(el => observer.unobserve(el!));
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    isProgrammaticScroll.current = true;

    if (lenis) {
      lenis.scrollTo(href, {
        duration: 1.5,
        onComplete: () => {
          isProgrammaticScroll.current = false;
        },
      });
    } else {
      // Fallback for native smooth scrolling
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 1500);
      }
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-2xl font-bold text-primary-dark">
                &lt;DevOps /&gt;
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === link.href ? 'text-white bg-gray-700/50' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="p-2 text-gray-300 hover:text-white" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-dark z-[100] flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
                <motion.a 
                    href="#hero" 
                    onClick={(e) => handleLinkClick(e, '#hero')} 
                    className="text-2xl font-bold text-primary-dark"
                    variants={mobileHeaderItemVariants}
                    initial="hidden"
                    animate="visible"
                >
                    &lt;DevOps /&gt;
                </motion.a>
                <motion.button 
                    onClick={toggleMenu} 
                    className="p-2 text-gray-300 hover:text-white" 
                    aria-label="Close menu"
                    variants={mobileHeaderItemVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <X className="w-6 h-6" />
                </motion.button>
            </div>
            <motion.nav 
                className="flex flex-col items-center justify-center flex-1 space-y-6"
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={mobileNavItemVariants}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-2xl font-semibold ${activeSection === link.href ? 'text-primary-dark' : 'text-gray-300 hover:text-primary-dark'}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
