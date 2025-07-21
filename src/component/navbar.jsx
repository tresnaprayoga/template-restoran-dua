import React, { useRef, useState } from 'react';

const Navbar = ({ promoRef, menuRef, galeryRef, aboutRef, kontakRef, newsRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    setIsMenuOpen(false); // Tutup menu
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src='/1.png' alt='Logo Nuansa Technology'></img>
      </div>

      {/* Hamburger Icon */}
      <div className='hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      {/* Menu Links */}
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection(promoRef)}>PROMO</a>
        <a onClick={() => scrollToSection(aboutRef)}>ABOUT US</a>
        <a onClick={() => scrollToSection(menuRef)}>MENU</a>
        <a onClick={() => scrollToSection(galeryRef)}>GALERY</a>
        <a onClick={() => scrollToSection(newsRef)}>NEWS</a>
        <a onClick={() => scrollToSection(kontakRef)}>KONTAK</a>
      </div>

      {/* <div className='navbar-buttons'>
        <button className='my-account-btn'>My Account</button>
        <button className='signup-btn'>Sign Up</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
