import './Info.css';
import pfp from './person.jpg'
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
export default function Info() {
    return (
        <div className='body'>
            <img src={pfp} className='pfp'/>
            <h1>Laura Smith</h1>
            <p className='job'>Frontend Developer</p>
            <p className='web'>laurasmith.website</p>
            <div className="buttonContainer">
                <button><MdEmail /> Email</button>
                <button className='linkedin'><BsLinkedin /> LinkedIn</button>
            </div>
        </div>
    )
}