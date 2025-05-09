import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function FooterSosial() {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.822145!3d-6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknMjAuMCJF!5e0!3m2!1sen!2sid!4v1634567890123';
  return (
    <footer className='footer'>
      <div></div>
      <div className='footer-section logo-section'>
        <h2 className='brand'>
          Signature<span>Bites</span>
        </h2>
        <p>© 2025 Signature Bites. All rights reserved.</p>
      </div>

      <div className='footer-section social-section'>
        <p>Stay connected with us</p>
        <div className='icons'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className='footer-section link-section'>
        <iframe src={mapUrl}></iframe>
      </div>
    </footer>
  );
}

export default FooterSosial;
