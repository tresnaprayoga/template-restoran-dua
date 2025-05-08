import React from 'react';

function MenuService({ image, title }) {
  return (
    <div className='food-card'>
      <div className='food-image-wrapper'>
        <img src={image} alt={title} className='food-image' />
      </div>
    </div>
  );
}

export default MenuService;
