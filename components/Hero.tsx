import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] bg-theme-bg overflow-hidden flex items-center pt-20">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-purple-gradient opacity-30 pointer-events-none"></div>
      
      {/* Large Glow behind Avatar */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-theme-purple/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            Meet the <span className="font-script text-theme-purple">best</span> items marketplace in Roblox
          </h1>
          
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Unforgettable experience of Trading, Selling and Exchanging not only Robux and Limited, but also in-Game Skins!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
            <Button size="lg" className="px-10 py-4 !rounded-2xl shadow-[0_0_25px_rgba(124,58,237,0.4)]">
              Visit Market 
            </Button>
            <Button variant="ghost" className="text-gray-400 font-semibold hover:text-white">
              Learn more
            </Button>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="relative h-[500px] flex items-center justify-center lg:justify-end">
           {/* Decorative Arrow/Shape from image */}
           <div className="absolute top-10 right-10 w-64 h-64 border-[30px] border-theme-card rounded-full opacity-50 blur-sm transform rotate-45 -z-10"></div>
           
           <img 
             src="https://www.pockettactics.com/wp-content/sites/pockettactics/2020/10/roblox-e1657277965973.jpg" 
             alt="Roblox Avatar" 
             className="relative z-10 h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 rounded-2xl"
           />
        </div>
      </div>

      {/* Curved Swoosh Separator */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 overflow-hidden pointer-events-none">
        {/* This SVG creates the curve effect seen in the image */}
        <svg viewBox="0 0 1440 320" className="w-full h-full text-theme-bg" preserveAspectRatio="none">
           {/* We use a path to "cut out" the curve from a slightly lighter bottom section overlay, 
               or in this case, we draw the curve as the transition to the next section if the next section has a different color. 
               However, since the background is continuous dark, we might just need a visual stroke or gradient curve.
               
               Let's emulate the "purple curve line" specifically. 
           */}
           <path 
             fill="none" 
             stroke="#7c3aed" 
             strokeWidth="2"
             strokeOpacity="0.5"
             d="M0,320 L0,160 C 200,280 400,300 720,200 C 1040,100 1200,100 1440,220 L1440,320"
             className="drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
           ></path>
           
           {/* A faint fill below the curve to give depth */}
           <path 
             fill="url(#grad1)" 
             d="M0,320 L0,160 C 200,280 400,300 720,200 C 1040,100 1200,100 1440,220 L1440,320 Z"
             opacity="0.1"
           ></path>
           
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" style={{stopColor:'#7c3aed', stopOpacity:1}} />
               <stop offset="100%" style={{stopColor:'#0a0a12', stopOpacity:1}} />
             </linearGradient>
           </defs>
        </svg>
      </div>
    </section>
  );
};
