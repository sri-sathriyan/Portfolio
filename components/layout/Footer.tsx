
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/sri-sathriyan' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/srisathriyan' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark/50 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-dark transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sri Sathriyan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
