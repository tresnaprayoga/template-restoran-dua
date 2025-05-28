import React from 'react';

function ItemProduk({ image, title, price }) {
  return (
    <div className='item-produk'>
      <div className='gallery-item'>
        <img src={image} alt='menu' data-aos='fade-up' />
      </div>
      <h3 className='item-title' data-aos='slide-left'>
        {title}
      </h3>
      <p className='item-author' data-aos='slide-left'>
        {price}
      </p>
    </div>
  );
}

export default ItemProduk;
