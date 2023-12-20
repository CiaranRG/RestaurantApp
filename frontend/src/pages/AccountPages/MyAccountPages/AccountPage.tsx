import './AccountPage.scss'
import { useEffect, useState } from 'react'
import Button from '../../../Components/Button/Button'
import { Link } from 'react-router-dom'

import Modal from '../../../Modals/Modal'
import BookTableForm from '../../../Components/BookTable/BookTableForm'

export default function AccountPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(()=>{
        document.title = 'My Account'
    },[])

    // Creating a function for toggling the modal to be the opposite of what it Currently is
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return(
        <>
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='accountHeaderText'>My Account</h1>
                <h2 className='accountSubheaderText'>Check Your Bookings Or Create One!</h2>
                <div className='accountButtonsDiv'>
                    <Link to='/reservations'>
                        <Button text={'My Reservations'}></Button>
                    </Link>
                    <Button text={'Book a Table'} onClick={toggleModal}></Button>
                </div>
            </div>
        </main>
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}><BookTableForm toggleModal={toggleModal}/></Modal>
        </>  
    )
}