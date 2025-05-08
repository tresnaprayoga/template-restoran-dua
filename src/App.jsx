import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HeroImage';
import ListItem from './component/MenuProduk/ListItemProduk';
import GaleriPicture from './component/Galery';
import { dataHeroSection, DataProdukSlide, MenuProduk, imageGalery } from './data/data';
import { useState } from 'react';
import ServiceList from './component/ServiceMenu/ServiceList';

function App() {
  const [dataHero, setDataHero] = useState(() => dataHeroSection());
  const [dataServcie, setDataService] = useState(() => DataProdukSlide());
  const [dataMenuProduk, setDataMenuProduk] = useState(() => MenuProduk());
  const [dataGalery, setDataGalery] = useState(() => imageGalery());
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection slides={dataHero} />
        <div className='service-list'>
          <h2>Penawaran Spesial</h2>
          <p>Jangan lewatkan promo terbatas untuk rasa yang tak terlupakan</p>
          <ServiceList foodData={dataServcie} />
        </div>
        <div className='produc-container'>
          <h2>Signature Bites</h2>
          <p>Cuma disini Burger yang disebut Signature</p>
          <ListItem listItem={dataMenuProduk} />
        </div>

        <div>
          <GaleriPicture images={dataGalery} />
        </div>
      </main>
    </div>
  );
}

export default App;
