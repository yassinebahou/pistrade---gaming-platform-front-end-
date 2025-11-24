import React from 'react';
import { Button } from './Button';
import { Ghost, Shield, Zap, ArrowRight } from 'lucide-react';

export const GameGrid: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "Roblox Limiteds",
      icon: <Shield size={32} className="text-white" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE3eFIVqDIE9a3NhnHU_81FYYgSpR1bRZiQ&s",
      gradient: "from-gray-800 to-black",
      items: ["Valkyrie Helm", "Dominus", "Fedora"]
    },
    {
      id: 2,
      title: "Murder Mystery 2 Skins",
      icon: <Ghost size={32} className="text-red-500" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo84vLH4J3xxpE_MOVp3zRBX6tq9p4epwqOg&s",
      gradient: "from-red-900/20 to-black",
      items: ["Chroma Lightbringer", "Icewing", "Batwing"]
    },
    {
      id: 3,
      title: "Dahood Skins",
      icon: <Zap size={32} className="text-yellow-400" />,
      image: "https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F2024815%2Fh0ualpo9es6v27ywz85hs_thumbnail.jpg&w=1033&q=10",
      gradient: "from-yellow-900/20 to-black",
      items: ["Flame Shotgun", "Revolver", "Tactical"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24 relative z-20 -mt-10">
      
      <div className="text-center mb-16 space-y-3">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          Trending Now
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Items gaining popularity right now. Most users are active on their catalog pages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="group relative bg-theme-card rounded-3xl p-1 overflow-hidden transition-transform hover:-translate-y-2 duration-300 border border-white/5 hover:border-theme-purple/50">
            {/* Inner Content */}
            <div className={`bg-gradient-to-b ${cat.gradient} rounded-[20px] p-6 h-full flex flex-col items-center text-center relative z-10`}>
              
              <div className="mb-6 relative">
                 <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full transform scale-150"></div>
                 <img src={cat.image} alt={cat.title} className="w-32 h-32 object-contain drop-shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                {cat.icon}
                <h3 className="font-display font-bold text-lg text-white">{cat.title}</h3>
              </div>

              <div className="flex gap-2 mt-4 overflow-hidden w-full justify-center opacity-60">
                 {cat.items.map((item, i) => (
                   <span key={i} className="text-xs bg-black/40 px-2 py-1 rounded border border-white/5 whitespace-nowrap">{item}</span>
                 ))}
              </div>
            </div>
            
            {/* Bottom Gradient Glow on Hover */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-theme-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <a href="#" className="inline-flex items-center gap-2 text-theme-purple font-bold hover:text-white transition-colors">
           View Full Catalog <ArrowRight size={16} />
         </a>
      </div>
    </div>
  );
};