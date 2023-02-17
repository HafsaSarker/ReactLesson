import './Navbar.css';
import { FaAirbnb } from 'react-icons/fa';
export default function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <h1><FaAirbnb className='logo'/><span>airbnb</span></h1>
            </div>   
        </nav>
    )
}