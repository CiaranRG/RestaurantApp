// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar(){
    // const navigate = useNavigate();
    return(
        <nav>
            <div className='leftNav'>
                <h2>Restaurant Name</h2>
            </div>
            <div className='centerNav'>
                <Link to='/home'>
                    <a href="/home">Home</a>
                </Link>
                <Link to='/menu'>
                    <a href="/menu">Menu</a>
                </Link>
                <Link to='/aboutUs'>
                    <a href="/aboutUs">About Us</a>
                </Link>
                {/* <Link to='/reservations'>
                    <a href="/reservations" className='reservationBtn'>Reservations</a>
                </Link> */}
            </div>
            <div className='rightNav'>
                {/* <a href="">My Account</a> */}
                <Link to='/login'>
                    <a href="">Login</a>
                </Link>
                <Link to='/registration'>
                    <a href="">Register</a>
                </Link>
            </div>
        </nav>
    )
}