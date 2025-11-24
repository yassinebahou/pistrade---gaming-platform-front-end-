import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { GameGrid } from './components/GameGrid';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-theme-bg text-white font-body selection:bg-theme-purple selection:text-white">
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        <GameGrid />
      </main>

      <Footer />
    </div>
  );
};

export default App;