import React from 'react';

function GaleriPicture({ images }) {
  return (
    <section className='galeri-section' data-aos-duration='1000' data-aos-delay='100'>
      <div className='galeri-title' data-aos='slide-left'>
        <h2>GALERY</h2>
        <p>Intip lezatnya sajian Burger terbaik kami dalam setiap bidikan</p>
      </div>

      <div className='galeri-layout'>
        {images.map((img, idx) => (
          <div className={`galeri-item ${img.className}`} key={idx}>
            <img src={img.src} alt={`kegiatan-${idx}`} data-aos='fade-up' />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GaleriPicture;
