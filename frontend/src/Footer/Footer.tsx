import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer(){
    return(
        <footer className="footer">
            <Link to='/aboutUs'>
                <a href="">If you would like to learn more about us or to contact us then click here!</a>
            </Link>
        </footer> 
    )
}