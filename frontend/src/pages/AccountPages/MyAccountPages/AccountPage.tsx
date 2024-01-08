import './AccountPage.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../Components/Button/Button'
import axios from 'axios'

import Modal from '../../../Modals/Modal'
import BookTableForm from '../../../Components/BookTable/BookTableForm'

type AccountPageProps = {
    onLogout: () => void
}

export default function AccountPage({ onLogout }: AccountPageProps){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reservations, setReservations] = useState([])
    const [deleteAccount, setDeleteAccount] = useState({isDelete: false, text: 'Delete Account'})

    const navigate = useNavigate()

    useEffect(()=>{
        document.title = 'My Account'
    },[])

    // Using this to get the reservations data
    useEffect(() => {
        try {
            axios('http://localhost:5000/api/reservations', {method: 'GET', withCredentials: true})
            // We have to use .then since we cannot use any of the data until the promise has resolved 
            .then((response) => {
                setReservations(response.data.result)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])

    // Creating a function for toggling the modal to be the opposite of what it Currently is
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const deleteAccountRequest = () => {
        // Set up this function to delete the account and reservations associated with it
        console.log('We are in the delete function')
        try {
            axios('http://localhost:5000/api/accounts', {method: 'DELETE', withCredentials: true})
            // We have to use .then since we cannot use any of the data until the promise has resolved 
            .then((response) => {
                if (response.data.message === 'Deletion Successful'){
                    console.log(response.data)
                    onLogout()
                    // Using this to navigate the user back to the homepage upon account deletion
                    navigate('/home');
                }
            })
        } catch (err) {
            console.log(err)
            // Notify User of the error
        }
    }

    const handleDeleteClick = () => {
        console.log(deleteAccount.isDelete)
        if (deleteAccount.isDelete === false){
            setDeleteAccount({isDelete: true, text: 'Confirm?'})
            console.log(deleteAccount.isDelete)
        } else {
            deleteAccountRequest()
        }
    }

    type ReservationTypes = {
        first_name: string,
        last_name: string,
        email: string,
        num_of_seats: number,
        special_request: string,
    }

    return(
        <>
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='accountHeaderText' style={{marginTop: '50px'}}>My Account</h1>
                <h2 className='accountHeaderTextTwo'>Check Your Bookings Or Create One!</h2>
                <div className='accountButtonsDiv'>
                    <Button classProp='accountPageButtons' text={deleteAccount.text} onClick={handleDeleteClick}></Button>
                    <Button classProp='accountPageButtons' text={'Book a Table'} onClick={toggleModal}></Button>
                </div>
                <h2 className='bookingsTitle'>Bookings Below!</h2>
                <div className='reservationsList'>
                    {reservations.map((reservation: ReservationTypes) => (
                        <div className='reservationsListItem'>
                            <p>Full Name - {reservation.first_name} {reservation.last_name}</p>
                            <p>Email - {reservation.email}</p>
                            <p>Date - {reservation.booking_date}</p>
                            <p>Phone - {reservation.phone_number}</p>
                            <p>Time - {reservation.booking_time} </p>
                            <p>Number Of Seats - {reservation.num_of_seats}</p>
                            <p>Special Requests - {reservation.special_request}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <Modal isOpen={isModalOpen} toggleModal={toggleModal}><BookTableForm toggleModal={toggleModal}/></Modal>
        </>  
    )
}