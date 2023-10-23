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
            </div>
            <div className='centerNav'>
                <h2>Restaurant Name</h2>
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