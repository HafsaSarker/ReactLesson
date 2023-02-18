import './Card.css';
import { AiFillStar } from 'react-icons/ai';
import cardImg from '../../assets/katie.png'
export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={cardImg} />
            <div className="card-stats">
                <span className='star-icon'><AiFillStar /></span>
                <span className="gray">{props.obj.rating}</span>
                <span className="gray">({props.obj.reviewCount}) • </span>
                <p>{props.obj.country}</p>
            </div>
            <p>{props.obj.title}</p>
            <p><span className='bold'>From ${props.obj.price} </span>/ person</p>
        </div>
    )
}