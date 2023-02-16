import './Footer.css'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footerCont">
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaGithubSquare />
        </div>
    )
}