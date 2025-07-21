import ItemCardNewsRmMkn from './ItemNews';

function ListCardNews({ items }) {
  return (
    <div className='card-news-restoran-satu'>
      <p>NEW OUR MENU </p>
      <div className='list'>
        {items.map((item, index) => (
          <ItemCardNewsRmMkn key={index} image={item.image} date={item.date} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default ListCardNews;
