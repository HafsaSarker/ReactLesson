import './Hero.css';
import imgGrid from './imgGrid.png';

export default function Hero() {
    return (
        <div className='heroSection'>
            <img src={imgGrid} className='heroImg'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}