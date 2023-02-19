import './App.css'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import data from './data';

function App() {
  const CardMap = data.map((card) => {
    return <Card 
      img = {card.coverImg}
      rating = {card.stats.rating}
      reviewCount = {card.stats.reviewCount}
      country = {card.location}
      title = {card.title}
      price = {card.price}
    />
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {CardMap}
      </section>
    </div>
  )
}

export default App
