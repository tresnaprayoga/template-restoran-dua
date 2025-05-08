import React from 'react';
import ItemProduk from './ItemPrduk';

function ListItem({ listItem }) {
  return (
    <div className='list-constainer'>
      {listItem.map((item, index) => (
        <ItemProduk key={index} {...item} />
      ))}
    </div>
  );
}

export default ListItem;
