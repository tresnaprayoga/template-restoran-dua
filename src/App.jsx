import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HeroImage';
import { dataHeroSection } from './data/data';
import { useState } from 'react';

function App() {
  const [dataHero, setDataHero] = useState(() => dataHeroSection());
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection slides={dataHero} />
      </main>
    </div>
  );
}

export default App;
