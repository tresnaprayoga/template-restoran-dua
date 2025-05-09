const heroSectiondata = [
  {
    image: '/2.png',
    title: 'Welcome to Our Site',
    description: 'Discover amazing content here.',
  },
  {
    image: '/2.png',
    title: 'One bite is not enough',
    description: 'Temukan Rasa yang Bikin Balik Lagi.',
  },
];

const produkData = [
  {
    image: '/1.png',
  },
  {
    image: '/3.png',
  },
  {
    image: '/4.png',
  },
  {
    image: '/3.png',
  },
];

const MenuProduks = [
  {
    image: '/5.jpeg',
    title: 'Cheesy Banget',
    price: 'Harga :Rp. 60.000',
    showPlayButton: true,
  },
  {
    image: '/7.jpeg',
    title: 'Double Trouble',
    price: 'Harga :Rp. 40.000',
    showPlayButton: false,
  },
  {
    image: '/8.jpeg',
    title: 'Smoky BBQ Legend',
    price: 'Harga :Rp. 35.000',
    showPlayButton: false,
  },
  {
    image: '/9.jpeg',
    title: 'Daging Doyan Pedas',
    price: 'Harga :Rp. 38.000',
    showPlayButton: false,
  },
  {
    image: '/10.jpeg',
    title: 'Truffle Temptation',
    price: 'Harga :Rp. 20.000',
    showPlayButton: false,
  },
  {
    image: '/11.jpeg',
    title: 'Crunchy Chickita',
    price: 'Harga :Rp. 30.000',
    showPlayButton: false,
  },
];

const imagesGalery = [
  { src: '/14.jpeg', className: 'box1' },
  { src: '/14.jpeg', className: 'box2' },
  { src: '/14.jpeg', className: 'box1' },
  { src: '/14.jpeg', className: 'box2' },
];

const aboutData = {
  title: 'Cerita di Balik Setiap Rasa',
  description:
    'Signature Bites lahir dari kecintaan kami terhadap rasa yang otentik dan memuaskan. Diprakarsai oleh Steven Lee, kami percaya bahwa burger bukan sekadar makanan cepat saji—melainkan pengalaman rasa yang dibuat dengan hati. Dengan bahan berkualitas, patty juicy, dan racikan saus khas, setiap burger kami punya cerita. Dari rasa cheesy, pedas, hingga premium, semua dirancang untuk menggugah selera dan bikin kamu ingin kembali lagi.',
  logo: '/4.jpg',
};

function dataHeroSection() {
  return heroSectiondata;
}

function DataProdukSlide() {
  return produkData;
}

function MenuProduk() {
  return MenuProduks;
}

function imageGalery() {
  return imagesGalery;
}

function AboutData() {
  return aboutData;
}

export { dataHeroSection, DataProdukSlide, MenuProduk, imageGalery, AboutData };
