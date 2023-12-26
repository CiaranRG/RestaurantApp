import './AccountPage.scss'
import { useEffect, useState } from 'react'
import Button from '../../../Components/Button/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Modal from '../../../Modals/Modal'
import BookTableForm from '../../../Components/BookTable/BookTableForm'

export default function AccountPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reservations, setReservations] = useState([])

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

    return(
        <>
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='accountHeaderText' style={{marginTop: '50px'}}>My Account</h1>
                <h2 className='accountSubheaderText'>Check Your Bookings Or Create One!</h2>
                <div className='accountButtonsDiv'>
                    <Link to='/accountDetails'>
                        <Button text={'Account Details'}></Button>
                    </Link>
                    <Button text={'Book a Table'} onClick={toggleModal}></Button>
                </div>
                <h2 style={{marginBottom: '-10px', marginTop: '30px' , fontSize: '32px', background: 'transparent', padding: '15px', borderRadius: '10px', border: '3px solid'}}>Bookings Below!</h2>
                <div className='reservationsList'>
                    {reservations.map((reservation) => (
                        <div className='reservationListItem' style={{
                            marginTop: '40px', backgroundColor: '#7f5539', padding: '0px 30px 0px 30px', border: '4px solid #ede0d4', borderRadius: '10px', fontSize: '32px', fontWeight: '700'
                            }}>
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