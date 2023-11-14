import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss'

// Importing our modal component and then the login/registration content that will go inside of it
import LoginRegisterModal from '../Modals/LoginAndRegister/LoginAndRegister';
import LoginForm from '../pages/AccountPages/LoginAndRegistration/LoginForm';
import RegistrationPage from '../pages/AccountPages/LoginAndRegistration/RegistrationPage';

export default function Navbar(){

    // Using state to track if the modal is open and what type of content is inside of it
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('')

    // Creating a function for toggling the modal to be the opposite of what it Currently is
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
    }

    // Making two more to set the content to be the one that was clicked below
    const toggleLoginModal = () => {
        toggleModal()
        setModalContent('login')
    }
    const toggleRegisterModal = () => {
        toggleModal()
        setModalContent('register')
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
                <a onClick={toggleLoginModal}>Login</a>
                <a onClick={toggleRegisterModal}>Register</a>
            </div>
        </nav>
        {/* Using a ternary operator to display the correct modal based on whats in modalContent, the children being passed in is the thing between the component (loginForm etc) */}
        {modalContent === 'login' ? (
        <LoginRegisterModal isOpen={isModalOpen} toggleModal={toggleModal}><LoginForm/></LoginRegisterModal>
    ) : modalContent === 'register' ? (
        <LoginRegisterModal isOpen={isModalOpen} toggleModal={toggleModal}><RegistrationPage/></LoginRegisterModal>
    ) : null}
        </>
    )
}