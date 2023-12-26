import './Homepage.scss'
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Modal from '../../Modals/Modal'
import BookTableForm from '../../Components/BookTable/BookTableForm'

type isLoggedInType = {
    isLoggedIn: boolean
}

export default function Homepage({isLoggedIn}: isLoggedInType){
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(()=>{
        document.title = 'Home'
    },[])

    // Creating a function for toggling the modal to be the opposite of what it Currently is
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const toggleBookingModal = () => {
        if (!isLoggedIn) {
            // Alerting the user to login before they can make a booking, this can be changed to something else later
            alert('Please login or register to book a table.');
        } else {
            // If the user is however logged in we trigger this
            toggleModal()
        }
    }

    return(
        <>
            <main className='pageBackground'>
                <div className='pageWrapper'>
                    <h1 className='homeHeaderText'>BELLA CUCINA</h1>
                    <h2 className='homeSubheaderText'>Serving great italian food since 1999</h2>
                    <h3 className='homeSubheaderText'>Browse our menu or create an account to book a table!</h3>
                    <div className='homeButtons'>
                    <Button text={'Book A Table'} onClick={toggleBookingModal}/>
                        <Link to='/menu'>
                            <Button text={'View Menu'}/>
                        </Link>
                    </div>
                </div>
            </main>
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}><BookTableForm toggleModal={toggleModal}/></Modal>
        </>
    )
}