// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar(){
    // const navigate = useNavigate();
    return(
        <nav>
            <div className='leftNav'>
                <Link to='/home'>
                    <a href="/home">Home</a>
                </Link>
                <Link to='/menu'>
                    <a href="/menu">Menu</a>
                </Link>
                <Link to='/reservations'>
                    <a href="/reservations">Reservations</a>
                </Link>
                <Link to='/gallery'>
                    <a href="/reservations">Gallery</a>
                </Link>
                {/* Add the contact/about us  to the footer at the bottom of the page */}
                {/* <a href="">Contact Us</a> */}
                {/* <a href="">About Us</a> */}
            </div>
            <div className='centerNav'>
                <h2>Restaurant Name</h2>
            </div>
            <div className='rightNav'>
                {/* <a href="">My Account</a> */}
                <a href="">Login</a>
                <a href="">Register</a>
            </div>
        </nav>
    )
}