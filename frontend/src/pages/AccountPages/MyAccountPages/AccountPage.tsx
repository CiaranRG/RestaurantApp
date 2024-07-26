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

const apiUrl = (import.meta as any).env.VITE_API_URL;

export default function AccountPage({ onLogout }: AccountPageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reservations, setReservations] = useState([])
    const [deleteAccount, setDeleteAccount] = useState({ isDelete: false, text: 'Delete Account' })
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'My Account'
    }, [])

    // Using this to get the reservations data
    useEffect(() => {
        const fetchReservations = async () => {
            setIsLoading(true)
            try {
                const response = await axios(`${apiUrl}/api/reservations`, { method: 'GET', withCredentials: true })
                // We have to use .then since we cannot use any of the data until the promise has resolved 
                setReservations(response.data.result)
                setIsLoading(false)
            } catch (err) {
                if (import.meta.env.MODE !== 'production') {
                    console.log(err)
                }
                setIsLoading(false)
                alert('There was a problem loading your reservations')
            }
        };
        fetchReservations()
    }, [])

    // Creating a function for toggling the modal to be the opposite of what it Currently is
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const deleteAccountRequest = () => {
        // Set up this function to delete the account and reservations associated with it
        try {
            axios(`${apiUrl}/api/accounts`, { method: 'DELETE', withCredentials: true })
                // We have to use .then since we cannot use any of the data until the promise has resolved 
                .then((response) => {
                    if (response.data.message === 'Deletion Successful') {
                        onLogout()
                        // Using this to navigate the user back to the homepage upon account deletion
                        navigate('/home');
                    }
                })
        } catch (err) {
            if (import.meta.env.MODE !== 'production') {
                console.log(err)
            }
            // Notify User of the error
        }
    }

    const handleDeleteClick = () => {
        if (deleteAccount.isDelete === false) {
            setDeleteAccount({ isDelete: true, text: 'Confirm?' })
        } else {
            deleteAccountRequest()
        }
    }

    type ReservationTypes = {
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        phone_number: string,
        booking_date: string,
        booking_time: string,
        num_of_seats: number,
        special_request: string,
        terms_conditions: boolean,
    }

    return (
        <>
            <main className='pageBackground'>
                <div className='pageWrapper'>
                    {isLoading ? <h1 className='accountHeaderText'>Loading!</h1> :
                        <>
                            <h1 className='accountHeaderText'>My Account</h1>
                            <h2 className='accountHeaderTextTwo'>Check Your Bookings Or Create One!</h2>
                            <div className='accountButtonsDiv'>
                                <Button classProp='accountPageButtons' text={deleteAccount.text} onClick={handleDeleteClick}></Button>
                                <Button classProp='accountPageButtons' text={'Book a Table'} onClick={toggleModal}></Button>
                            </div>
                            <h2 className='bookingsTitle'>Bookings Below!</h2>
                        </>
                    }
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
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}><BookTableForm /></Modal>
        </>
    )
}