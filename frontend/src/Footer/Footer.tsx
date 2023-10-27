import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer(){
    return(
        <footer className="footer">
            <Link to='/aboutUs'>
                <a href="/aboutUs">If you would like to contact us then click here!</a>
            </Link>
            <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">All photos courtesy of Unsplash</a>
        </footer> 
    )
}