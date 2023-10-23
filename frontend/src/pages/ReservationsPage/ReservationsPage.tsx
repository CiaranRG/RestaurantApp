import BookTableForm from '../../Components/BookTable/BookTableForm'
import './ReservationsPage.scss'
import { useEffect } from 'react'

export default function ReservationsPage(){
    useEffect(()=>{
        document.title = 'Reservations'
    },[])
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='reservationsHeaderText'>Book a Table!</h1>
                <h2 className='reservationsSubheaderText'>Use the form below to create a reservation!</h2>
                <div className='reservationsForm'>
                    <BookTableForm/>
                </div>
            </div>
        </main>
    )
}