import React, { useState } from 'react';
import { Menu, X, Zap, Ghost, Shield } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
           {/* Stylized Logo Icon similar to the lightning bolt in the image */}
           <div className="text-white font-display font-bold text-2xl tracking-wide flex items-center gap-1">
             <span className="text-theme-accent"><Zap size={24} fill="currentColor" /></span>
             pistrade
           </div>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 bg-theme-bg/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
          <a href="#" className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors">
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            Roblox Limiteds
          </a>
          <a href="#" className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            Murder Mystery 2 Skins
          </a>
          <a href="#" className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors">
            <div className="w-2 h-2 rounded-full bg-red-600/50"></div>
            Dahood Skins
          </a>
        </div>

        {/* Right Action */}
        <div className="hidden md:flex items-center">
          <Button variant="secondary" size="sm" className="!rounded-xl border-white/10 hover:bg-white/10">
            Check Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-theme-card border border-white/10 p-6 rounded-2xl flex flex-col gap-4 shadow-xl z-50">
           <a href="#" className="flex items-center gap-3 text-white font-bold py-2 border-b border-white/5">
             <Shield size={18} className="text-theme-purple" />
             Roblox Limiteds
           </a>
           <a href="#" className="flex items-center gap-3 text-white font-bold py-2 border-b border-white/5">
             <Ghost size={18} className="text-red-400" />
             Murder Mystery 2 Skins
           </a>
           <a href="#" className="flex items-center gap-3 text-white font-bold py-2 border-b border-white/5">
             <Zap size={18} className="text-yellow-400" />
             Dahood Skins
           </a>
           <div className="mt-4">
             <Button variant="primary" className="w-full">Check Now</Button>
           </div>
        </div>
      )}
    </nav>
  );
};