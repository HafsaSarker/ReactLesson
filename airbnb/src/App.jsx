import './App.css'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import KatieImg from './assets/Katie.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        obj = {{
          img: KatieImg,
          rating: 5.0,
          reviewCount: 6,
          country: "UK",
          title: "Life Lessons with Katie Zaferes",
          price: 136
        }}
      />
    </div>
  )
}

export default App
