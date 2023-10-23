import BookTableForm from '../../Components/BookTable/BookTableForm'
import './ReservationsPage.scss'

export default function ReservationsPage(){
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='reservationsHeaderText'>Reservations Page</h1>
                <h2 className='reservationsSubheaderText'>This is the subheader text for the reservations page</h2>
                <div className='reservationsForm'>
                    <BookTableForm/>
                </div>
            </div>
        </main>
    )
}