import React from 'react';

function ItemProduk({ image, title, price }) {
  return (
    <div className='item-produk'>
      <div className='gallery-item'>
        <img src={image} alt='menu' />
      </div>
      <h3 className='item-title'>{title}</h3>
      <p className='item-author'>{price}</p>
    </div>
  );
}

export default ItemProduk;
