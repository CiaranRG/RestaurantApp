import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import './MenuPage.scss'
import axios from 'axios'
import MenuItemCard from '../../Components/MenuItemCard/MenuItemCard'


const menuDB = [
    {
        name: 'Pasta',
        desc: 'Indulge in our authentic Italian pasta, a symphony of flavors harmoniously blended to tantalize your taste buds. Freshly made from durum wheat, our pasta is cooked al dente, ensuring a delightful bite. Draped in our signature marinara sauce, every mouthful promises a gastronomic experience reminiscent of a quaint Italian bistro.',
        ingredients: 'Durum wheat pasta, Fresh tomatoes, Garlic cloves, Olive oil, Fresh basil, Grated Parmesan cheese, Ground black pepper, Crushed red pepper (optional for added spice), Fresh mozzarella, Fine sea salt',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1671547330493-b07d377085ca?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]

type MenuItem = {
    name: string
    description: string
    ingredients: string
    imgurl: string
}

export default function MenuPage(){
    // Defining the state so it starts as an empty array 
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])
    useEffect(()=>{
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
        console.log(response)

    }, [])

    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='menuHeaderText'>Menu Page</h1>
                <div className='menuItemsContainer'>
                    {menuItems.map((item: MenuItem, index: number) => (
                        <MenuItemCard key={index} name={`${item.name}`} description={`${item.description}`} imgUrl={`${item.imgurl}`} ingredients={`${item.ingredients}`}/>
                    ))}
                </div>
            </div>
        </main>
    )
}