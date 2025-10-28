
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark';

  const variantStyles = {
    primary: 'bg-primary-light text-white hover:bg-opacity-90 dark:bg-primary-dark dark:hover:bg-opacity-90 focus:ring-primary-light',
    secondary: 'bg-secondary-light text-white hover:bg-opacity-90 dark:bg-secondary-dark dark:hover:bg-opacity-90 focus:ring-secondary-light',
    outline: 'border border-primary-light text-primary-light hover:bg-primary-light hover:text-white dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-dark',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const mergedClasses = twMerge(baseStyles, variantStyles[variant], sizeStyles[size], className);

  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
};
