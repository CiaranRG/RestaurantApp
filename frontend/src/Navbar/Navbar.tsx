import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss'

// Importing our modal component and then the login/registration content that will go inside of it
import LoginRegisterModal from '../Modals/LoginAndRegister/LoginAndRegister';
import LoginPage from '../pages/AccountPages/LoginAndRegistration/LoginPage';
import RegistrationPage from '../pages/AccountPages/LoginAndRegistration/RegistrationPage';

export default function Navbar(){

    // Using state to track if the modal is open and what type of content is inside of it
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Creating a function for toggling the modal to be the opposite of what it Currently is
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
    }
    
    return(
        <>
        <nav>
            <div className='leftNav'>
                <h2>BELLA CUCINA</h2>
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
                <a onClick={toggleModal}>Login</a>
                <a onClick={toggleModal}>Register</a>
            </div>
        </nav>
        {/* Here we use our modal component and pass the isOpen and toggleModel function, whatever is between our component will be considered the children when passed through*/}
        <LoginRegisterModal isOpen={isModalOpen} toggleModal={toggleModal}><LoginPage/></LoginRegisterModal>
        </>
    )
}