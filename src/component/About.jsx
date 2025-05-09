import React from 'react';

function ContentSectionAbout({ title, description, image }) {
  return (
    <section className='content-section'>
      <h2 id='info'></h2>
      <div className='content-wrapper'>
        <div className='content-image'>
          <img src={image} alt='gambar' />
        </div>
        <div className='content-text'>
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
