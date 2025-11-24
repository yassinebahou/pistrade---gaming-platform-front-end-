import React from 'react';
import { Button } from './Button';
import { Rocket } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-roblox-purple to-roblox-red py-20 relative overflow-hidden border-t-8 border-roblox-black">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
      
      {/* Floating Bricks Decoration */}
      <div className="absolute top-10 left-10 w-20 h-10 bg-roblox-yellow border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transform -rotate-12 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-roblox-blue border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transform rotate-12 animate-bounce-slow"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6 drop-shadow-[4px_4px_0px_#000]">
          READY TO START?
        </h2>
        <p className="text-2xl font-bold text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Join the fun, build your dreams, and make new friends in the ultimate virtual universe.
        </p>
        
        <div className="bg-black inline-block p-2 rounded-2xl shadow-comic-lg rotate-1 transition-transform hover:rotate-0 border-2 border-white">
            <Button size="lg" className="text-2xl px-12 py-6 bg-roblox-green border-white shadow-glow-blue" icon={<Rocket size={28} />}>
              START YOUR ADVENTURE
            </Button>
        </div>
      </div>
    </section>
  );
};