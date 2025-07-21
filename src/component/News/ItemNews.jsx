function ItemCardNewsRmMkn({ image, date, title, description }) {
  return (
    <div>
      <div className='item-restoran-satu'>
        <div className='item-img-restoran-satu'>
          <img src={image} alt={title} />
        </div>

        <div className='item-content-restoran-satu'>
          <div className='item-date'>{date}</div>
          <div className='item-title-restoran-satu'>{title}</div>
          <div className='item-description-restoran-satu'>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemCardNewsRmMkn;
