import React from 'react';
import { FEATURES_DATA } from '../constants';

export const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 relative z-10">
       <div className="text-center mb-12">
        <h2 className="font-display font-black text-4xl md:text-5xl text-white">
          WHY PLAY <span className="text-roblox-green drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">HERE?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES_DATA.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-roblox-dark rounded-[2rem] p-6 border-4 border-gray-800 shadow-comic hover:border-roblox-purple hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(157,0,255,0.4)] transition-all duration-300 flex flex-col items-center text-center group"
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-black mb-6 ${feature.color} shadow-[2px_2px_0px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform group-hover:shadow-[0_0_15px_currentColor]`} style={{color: 'inherit'}}>
              {feature.icon}
            </div>
            
            <h3 className="font-display font-black text-2xl mb-3 text-white group-hover:text-roblox-purple transition-colors">{feature.title}</h3>
            <p className="font-bold text-gray-400 leading-relaxed group-hover:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};