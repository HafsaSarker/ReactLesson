import './Card.css';
import { AiFillStar } from 'react-icons/ai';
import cardImg from '../../assets/katie.png'
export default function Card() {
    return (
        <div className="card">
            <img className="card--img" src={cardImg} />
            <div className="card-stats">
                <span className='star-icon'><AiFillStar /></span>
                <span className="gray">5.0</span>
                <span className="gray">(6) • </span>
                <p><span className="bold">From $136</span> / person</p>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}