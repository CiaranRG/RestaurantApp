import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'

// Importing our modal component and then the login/registration content that will go inside of it
import Modal from '../Modals/Modal';
import LoginForm from '../pages/AccountPages/LoginAndRegistration/LoginForm';
import RegisterForm from '../pages/AccountPages/LoginAndRegistration/RegisterForm';
import BookTableForm from '../Components/BookTable/BookTableForm';

type NavbarProps = {
    isLoggedIn: boolean;
    onLogout: () => void;
    onLogin: () => void;
  }

export default function Navbar({isLoggedIn, onLogout, onLogin}: NavbarProps){

    // Using state to track if the modal is open and what type of content is inside of it
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('')

    const navigate = useNavigate()

    // Creating a function for toggling the modal to be the opposite of what it Currently is
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
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
    // Adding a third modal function for opening the reservations modal
    const toggleReservationModal = () => {
        toggleModal()
        setModalContent('reservation')
    }

    const handleLogout = () => {
        onLogout()
        // Using this to navigate the user back to the homepage upon logging out from wherever they were
        navigate('/home');
    }

    return(
        <>
        <nav>
            <div className='leftNav'>
            <Link to='/home'>
                <h2>BELLA CUCINA</h2>
            </Link>
            </div>
            <div className='centerNav'>
                <Link to='/home'>
                    Home
                </Link>
                <Link to='/menu'>
                    Menu
                </Link>
                <Link to='/aboutUs'>
                    About Us
                </Link>
                {/* Only loading this if the isLoggedIn is true */}
                { isLoggedIn &&
                    <a href="#" onClick={toggleReservationModal}>Book Now</a>}
            </div>
            {/* Using a ternary operator to decide what to display based on login state */}
            <div className='rightNav'>
                {/* If true this one shows, we also have a function being passed down from the app that will handle our logging out */}
                { isLoggedIn === true ? (<><Link to='accountPage'>My Account</Link> <a onClick={handleLogout}>Logout</a></>) : 
                // If False this one shows instead
                (<> <a onClick={toggleLoginModal}>Login</a> <a onClick={toggleRegisterModal}>Register</a> </>)}
            </div>
        </nav>
        {/* Using a ternary operator to display the correct modal based on whats in modalContent, the children being passed in is the thing between the component (loginForm etc) */}
        {modalContent === 'login' ? (
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}><LoginForm onLogin={onLogin} toggleModal={toggleModal}/></Modal>
    ) : modalContent === 'register' ? (
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}><RegisterForm toggleModal={toggleModal}/></Modal>
    ) : modalContent === 'reservation' ? (
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}><BookTableForm/></Modal>
    ) : null}
        </>
    )
}