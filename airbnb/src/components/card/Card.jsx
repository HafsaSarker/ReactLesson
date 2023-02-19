import './Card.css';
import { AiFillStar } from 'react-icons/ai';

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card-stats">
                <span className='star-icon'><AiFillStar /></span>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <p>{props.country}</p>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price} </span>/ person</p>
        </div>
    )
}