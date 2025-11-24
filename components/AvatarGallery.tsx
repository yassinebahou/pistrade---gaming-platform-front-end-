import React, { useState } from 'react';
import { AVATARS_DATA } from '../constants';
import { Button } from './Button';
import { Sparkles, Shirt, ChevronRight } from 'lucide-react';

export const AvatarGallery: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS_DATA[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Interactive Preview */}
        <div className="relative order-2 lg:order-1">
          {/* Card Backing */}
          <div className={`absolute inset-0 transform rotate-3 rounded-3xl border-4 border-white ${selectedAvatar.color} opacity-30 scale-105 transition-all duration-500 blur-sm`}></div>
          
          <div className="relative bg-roblox-dark/80 backdrop-blur-md border-4 border-white rounded-3xl p-8 flex flex-col items-center justify-center min-h-[500px] shadow-[0_0_40px_rgba(0,240,255,0.1)]">
             <div className="absolute top-4 right-4 animate-pulse">
               <Sparkles className="text-roblox-yellow" size={32} />
             </div>
             
             <img 
               src={selectedAvatar.image} 
               alt={selectedAvatar.name}
               className="h-80 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 animate-[bounce_4s_infinite]"
               key={selectedAvatar.id} // Re-trigger animation on change
             />
             
             <div className="mt-8 text-center">
               <h3 className="font-display font-black text-4xl text-white mb-2 drop-shadow-[0_2px_0px_#000]">{selectedAvatar.name}</h3>
               <p className="text-xl text-roblox-blue font-bold tracking-widest uppercase">{selectedAvatar.style}</p>
             </div>
          </div>
        </div>

        {/* Right: Selection Grid */}
        <div className="order-1 lg:order-2 space-y-8">
           <div>
             <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-4 drop-shadow-[4px_4px_0px_#000]">
               CHOOSE YOUR <span className="text-roblox-blue drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">STYLE</span>
             </h2>
             <p className="text-xl text-gray-300 font-bold max-w-lg">
               From neon ninjas to cyber knights, express yourself with millions of unique avatar combinations.
             </p>
           </div>

           <div className="grid grid-cols-3 gap-4">
             {AVATARS_DATA.map((avatar) => (
               <button
                 key={avatar.id}
                 onClick={() => setSelectedAvatar(avatar)}
                 className={`group relative rounded-xl border-4 overflow-hidden transition-all duration-200 h-28 ${
                   selectedAvatar.id === avatar.id 
                     ? 'border-roblox-yellow transform -translate-y-2 shadow-[0_0_15px_rgba(245,255,0,0.5)]' 
                     : 'border-gray-700 bg-gray-800 hover:border-white'
                 }`}
               >
                 <div className={`absolute inset-0 opacity-50 ${avatar.color}`}></div>
                 <img src={avatar.image} alt={avatar.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                 {selectedAvatar.id === avatar.id && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                     <Shirt className="text-white drop-shadow-md" size={24} />
                   </div>
                 )}
               </button>
             ))}
           </div>

           <div className="bg-roblox-dark rounded-2xl p-6 border-2 border-gray-700 backdrop-blur-sm">
             <div className="flex items-start gap-4">
               <div className={`p-3 rounded-lg ${selectedAvatar.color} text-black border-2 border-white shadow-[0_0_10px_currentColor]`}>
                 <Shirt size={24} />
               </div>
               <div>
                 <h4 className="font-display font-bold text-xl text-white">Item Details</h4>
                 <p className="text-gray-400">{selectedAvatar.description}</p>
               </div>
             </div>
           </div>
           
           <Button variant="primary" size="lg" className="w-full md:w-auto shadow-glow-blue" icon={<ChevronRight />}>
             Customize Now
           </Button>
        </div>

      </div>
    </div>
  );
};