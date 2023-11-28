import { useEffect, useState } from 'react'
import './MenuPage.scss'
import axios from 'axios'
import MenuItemCard from '../../Components/MenuItemCard/MenuItemCard'

type MenuItem = {
    name: string
    description: string
    ingredients: string
    imgurl: string
}

export default function MenuPage(){
    // Defining the state so it starts as an empty array 
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])
    useEffect(() => {
        document.title = 'Menu'
    },[])
    // Creating a useEffect to fetch the data from the backend
    useEffect(() => {
        const response = axios.get('http://localhost:5000/api/menu')
        .then((response) => {
            // Setting data in the response to be our array of objects in menuItems
            setMenuItems(response.data)
        })
        .catch((error) => {
            console.log('Error Occurred', error)
        })
    }, [])

    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='menuHeaderText'>Check Out Our Menu Below!</h1>
                <div className='menuItemsContainer'>
                    {menuItems.map((item: MenuItem, index: number) => (
                        <MenuItemCard key={index} name={`${item.name}`} description={`${item.description}`} imgUrl={`${item.imgurl}`} />
                    ))}
                </div>
            </div>
        </main>
    )
}