import React from 'react';
import { Github, Twitter, Youtube, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-roblox-black text-white py-12 border-t-8 border-roblox-dark">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center gap-2 mb-4">
              <div className="bg-roblox-red w-8 h-8 border-2 border-white rounded transform -rotate-6 shadow-[0_0_10px_rgba(255,0,85,0.6)]"></div>
              <span className="font-display font-black text-2xl tracking-tighter italic">
                NEON<span className="text-roblox-blue">BLOCK</span>
              </span>
            </div>
            <p className="text-gray-400 font-bold max-w-xs">
              The ultimate platform for imagination. Built by players, for players.
            </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-roblox-yellow">Discover</h4>
          <ul className="space-y-2 text-gray-400 font-bold">
            <li><a href="#" className="hover:text-roblox-blue hover:underline transition-colors">Games</a></li>
            <li><a href="#" className="hover:text-roblox-blue hover:underline transition-colors">Avatar Shop</a></li>
            <li><a href="#" className="hover:text-roblox-blue hover:underline transition-colors">Create</a></li>
            <li><a href="#" className="hover:text-roblox-blue hover:underline transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
           <h4 className="font-display font-bold text-lg mb-4 text-roblox-blue">Connect</h4>
           <div className="flex gap-4">
             <a href="#" className="bg-roblox-dark border border-gray-700 p-2 rounded-lg hover:bg-roblox-red hover:border-roblox-red hover:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all text-gray-300 hover:text-white"><Twitter size={20} /></a>
             <a href="#" className="bg-roblox-dark border border-gray-700 p-2 rounded-lg hover:bg-roblox-red hover:border-roblox-red hover:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all text-gray-300 hover:text-white"><Youtube size={20} /></a>
             <a href="#" className="bg-roblox-dark border border-gray-700 p-2 rounded-lg hover:bg-roblox-red hover:border-roblox-red hover:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all text-gray-300 hover:text-white"><Github size={20} /></a>
             <a href="#" className="bg-roblox-dark border border-gray-700 p-2 rounded-lg hover:bg-roblox-red hover:border-roblox-red hover:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all text-gray-300 hover:text-white"><Globe size={20} /></a>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-600 font-bold text-sm">
        <p>&copy; 2025 NeonBlock Inc. Not affiliated with Roblox Corporation. This is a concept demo.</p>
      </div>
    </footer>
  );
};