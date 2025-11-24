import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "relative font-body font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded-full";
  
  const variants = {
    // Solid Purple gradient look
    primary: "bg-[#7c3aed] text-white hover:bg-[#6d28d9] hover:shadow-glow shadow-lg hover:-translate-y-0.5",
    
    // Darker/Secondary
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
    
    // Outline
    outline: "bg-transparent text-white border border-white/20 hover:border-theme-purple hover:text-theme-purple",
    
    // Text link style
    ghost: "bg-transparent text-gray-400 hover:text-white hover:underline decoration-theme-purple underline-offset-4 px-0",
  };

  const sizes = {
    sm: "text-xs py-2 px-4",
    md: "text-sm py-3 px-6",
    lg: "text-base py-3 px-8",
  };

  // Override padding for ghost
  if (variant === 'ghost') {
     sizes.sm = "text-sm";
     sizes.md = "text-base";
     sizes.lg = "text-lg";
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};