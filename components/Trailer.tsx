import React from 'react';
import { Button } from './Button';
import { Play } from 'lucide-react';

export const Trailer: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
       <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-8">
          WATCH THE <span className="text-roblox-red drop-shadow-[0_0_10px_rgba(255,0,85,0.8)]">ACTION</span>
       </h2>

       {/* Video Frame */}
       <div className="relative rounded-3xl border-8 border-gray-800 bg-black shadow-[0_0_30px_rgba(0,240,255,0.2)] overflow-hidden group cursor-pointer aspect-video hover:border-roblox-blue transition-colors duration-300">
         <img 
           src="https://picsum.photos/seed/roblox_gameplay/1200/675" 
           alt="Gameplay Trailer" 
           className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
         />
         
         <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-24 h-24 bg-roblox-red rounded-full flex items-center justify-center border-4 border-white shadow-glow-pink transform group-hover:scale-110 transition-transform duration-300">
             <Play fill="white" className="text-white ml-2" size={40} />
           </div>
         </div>

         <div className="absolute bottom-6 left-6 text-left">
           <span className="bg-roblox-yellow text-black px-3 py-1 rounded-md font-bold text-sm border-2 border-black mb-2 inline-block shadow-[2px_2px_0px_#000]">GAMEPLAY PREVIEW</span>
           <h3 className="text-white font-display font-bold text-2xl drop-shadow-md">Epic Obby Battles 2025</h3>
         </div>
         
         {/* Scanline effect */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-30"></div>
       </div>

       <div className="mt-8">
         <p className="text-xl font-bold text-gray-400 mb-6">Experience the next generation of blocky fun.</p>
         <Button size="lg" variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-black shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            See More Videos
         </Button>
       </div>
    </div>
  );
};