import React from 'react';

function ContentSectionAbout({ title, description, image }) {
  return (
    <section className='content-section' data-aos-duration='1000' data-aos-delay='100'>
      <h2 id='info'></h2>
      <div className='content-wrapper'>
        <div className='content-image' data-aos='slide-right'>
          <img src={image} alt='gambar' />
        </div>
        <div className='content-text' data-aos='slide-left'>
          <h3>{title}</h3>
          <p>{description}</p>
          <br />
          <br />
          <p>Karena setiap gigitan layak dikenang — Steven Lee.</p>
        </div>
      </div>
    </section>
  );
}

export default ContentSectionAbout;
