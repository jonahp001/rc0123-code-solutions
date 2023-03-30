import './App.css';
import Carousel from './Carousel';

const data = [
  {
    id: 0,
    url: 'https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2023/03/m126505-0001_2301ac_001_cmjn-e1679955981801.jpg',
    alt: '2023 solid gold Rolex Daytona with black dial'
  },
  {
    id: 1,
    url: 'https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2023/03/m126000-0009_2301jva_001_cmjn.jpg',
    alt: '2023 Rolex Oyster perpetual with colorful and playful dial'
  },
  {
    id: 2,
    url: 'https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2023/03/m126713grnr-0001_2301jva_001_cmjn.jpg',
    alt: '2023 Rolex GMT Master 2 two-tone golde with black dial'
  },
  {
    id: 3,
    url: 'https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2023/03/m226627-0001_2301jva_002_cmjn.jpg',
    alt: '2023 Rolex Yachtmaster 42mm in titanium'
  },
  {
    id: 4,
    url: 'https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2023/03/m128239-0056_2301jva_001_cmjn-1.jpg',
    alt: '2023 Rolex day-date white gold with colorful puzzle dial'
  }
]

function App() {
  return (
    <div className="App">
      <Carousel data={data}/>
    </div>
  );
}

export default App;
