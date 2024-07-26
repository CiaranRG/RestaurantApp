import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="socialLinks">
                <Link to='https://twitter.com'>
                    <FontAwesomeIcon icon={faTwitter}/>
                </Link>
                <Link to='https://instagram.com'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </Link>
                <Link to='https://youtube.com'>
                    <FontAwesomeIcon icon={faYoutube}/>
                </Link>
                <Link to='https://facebook.com'>
                    <FontAwesomeIcon icon={faFacebook}/>
                </Link>
            </div>
            <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">All photos courtesy of Unsplash</a>
        </footer> 
    )
}