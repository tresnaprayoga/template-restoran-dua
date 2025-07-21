import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HeroImage';
import ListItem from './component/MenuProduk/ListItemProduk';
import GaleriPicture from './component/Galery';
import ContentAbout from './component/About';
import FooterSosial from './component/Footer';
import { dataHeroSection, DataProdukSlide, MenuProduk, imageGalery, AboutData } from './data/data';
import { useRef, useEffect, useState } from 'react';
import ServiceList from './component/ServiceMenu/ServiceList';
import WhatsAppButton from './component/WaButton';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Refs untuk tiap section
  const promoRef = useRef(null);
  const menuRef = useRef(null);
  const galeryRef = useRef(null);
  const aboutRef = useRef(null);
  const kontakRef = useRef(null);

  const [dataHero, setDataHero] = useState(() => dataHeroSection());
  const [dataServcie, setDataService] = useState(() => DataProdukSlide());
  const [dataMenuProduk, setDataMenuProduk] = useState(() => MenuProduk());
  const [dataGalery, setDataGalery] = useState(() => imageGalery());
  const [dataAbout, setDataAbout] = useState(() => AboutData());
  return (
    <div>
      <header>
        <Navbar promoRef={promoRef} menuRef={menuRef} galeryRef={galeryRef} aboutRef={aboutRef} kontakRef={kontakRef} />
      </header>
      <main>
        <HeroSection slides={dataHero} />
        <WhatsAppButton />
        <div ref={promoRef} className='service-list'>
          <h2 data-aos='slide-left'>Penawaran Spesial</h2>
          <p data-aos='slide-left'>Jangan lewatkan promo terbatas untuk rasa yang tak terlupakan</p>
          <ServiceList foodData={dataServcie} />
        </div>
        <div ref={menuRef} className='produc-container'>
          <h2>Signature Bites</h2>
          <p>Cuma disini Burger yang disebut Signature</p>
          <ListItem listItem={dataMenuProduk} />
        </div>
        <div ref={galeryRef}>
          <GaleriPicture images={dataGalery} />
        </div>
        <div ref={aboutRef}>
          <ContentAbout title={dataAbout.title} description={dataAbout.description} image={dataAbout.logo} />
        </div>
      </main>

      <footer>
        <FooterSosial />
      </footer>
    </div>
  );
}

export default App;
