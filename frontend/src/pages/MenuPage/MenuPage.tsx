import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuPage.scss'
import axios from 'axios'
import MenuItemCard from '../../Components/MenuItemCard/MenuItemCard'

type MenuItem = {
    name: string
    description: string
    ingredients: string
    imgurl: string
}

const apiUrl = import.meta.env.VITE_API_URL;

export default function MenuPage(){
    // Defining the state so it starts as an empty array 
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    // Setting title
    useEffect(() => {
        document.title = 'Menu'
    },[])

    // Creating a useEffect to fetch the data from the backend, making an async function inside so we can make collect the data
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            await axios.get(`${apiUrl}/api/menu`)
            .then((response) => {
                // Setting data in the response to be our array of objects in menuItems
                setMenuItems(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                if (import.meta.env.MODE !== 'production') {
                    console.log('Error Occurred')
                    console.log(error)
                }
                // Navigating the user to the error page and passing in a code and message to use for displaying the error message
                navigate('/error', { state: { errorCode: 404, errorMessage: 'Menu not Loading!' } });
            })
        }
        // Calling the function defined above
        fetchData()
    }, [navigate])

    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                {isLoading ? <h1 className='menuHeaderText' style={{fontSize: '2rem'}}>Loading!</h1> : <h1 className='menuHeaderText'>Check Out Our Menu Below!</h1>}
                <div className='menuItemsContainer'>
                    {menuItems.map((item: MenuItem, index: number) => (
                        <MenuItemCard key={index} name={`${item.name}`} description={`${item.description}`} imgUrl={`${item.imgurl}`}/>
                    ))}
                </div>
            </div>
        </main>
    )
}