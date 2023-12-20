import './ReservationsPage.scss'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ReservationsPage(){
    useEffect(()=>{
        document.title = 'Reservations'
    },[])
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='reservationsHeaderText'>Book a Table!</h1>
                <h2 className='reservationsSubheaderText'>Use the form below to create a reservation!</h2>
                <Link to='/reservations'></Link>
            </div>
        </main>
    )
}