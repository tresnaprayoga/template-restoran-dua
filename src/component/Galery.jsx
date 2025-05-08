import React from 'react';

function GaleriPicture({ images }) {
  return (
    <section className='galeri-section'>
      <div className='galeri-title'>
        <h2>Galery</h2>
        <p>Intip lezatnya sajian Burger terbaik kami dalam setiap bidikan</p>
      </div>

      <div className='galeri-layout'>
        {images.map((img, idx) => (
          <div className={`galeri-item ${img.className}`} key={idx}>
            <img src={img.src} alt={`kegiatan-${idx}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GaleriPicture;
