import React from 'react';

function MenuService({ image, title }) {
  return (
    <div className='food-card' data-aos-duration='1000' data-aos-delay='100'>
      <div className='food-image-wrapper' data-aos='fade-up'>
        <img src={image} alt={title} className='food-image' />
      </div>
    </div>
  );
}

export default MenuService;
