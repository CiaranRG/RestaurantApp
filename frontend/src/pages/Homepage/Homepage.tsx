import './Homepage.scss'
import Button from '../../Components/BookTable/Button'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Homepage(){
    useEffect(()=>{
        document.title = 'Home'
    },[])
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='homeHeaderText'>BELLA CUCINA</h1>
                <h2 className='homeSubheaderText'>Serving great italian food since 1999</h2>
                <h3 className='homeSubheaderText'>Browse our menu or create an account to book a table!</h3>
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