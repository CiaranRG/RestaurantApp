import './Homepage.scss'
import Button from '../../Components/BookTable/Button'
import { Link } from 'react-router-dom'

export default function Homepage(){
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='homeHeaderText'>Restaurant Name</h1>
                <h2 className='homeSubheaderText'>This is the subheader text for this restaurant project idea</h2>
                <div className='homeButtons'>
                    <Link to='/reservations'>
                        <Button text={'Book A Table'}/>
                    </Link>
                    <Link to='/menu'>
                        <Button text={'View Menu'}/>
                    </Link>
                </div>
            </div>
        </main>
    )
}