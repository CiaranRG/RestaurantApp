import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import './MenuPage.scss'
import MenuItemCard from '../../Components/MenuItemCard/MenuItemCard'


const menuDB = [
    {
        name: 'Pasta',
        desc: 'Indulge in our authentic Italian pasta, a symphony of flavors harmoniously blended to tantalize your taste buds. Freshly made from durum wheat, our pasta is cooked al dente, ensuring a delightful bite. Draped in our signature marinara sauce, every mouthful promises a gastronomic experience reminiscent of a quaint Italian bistro.',
        ingredients: 'Durum wheat pasta, Fresh tomatoes, Garlic cloves, Olive oil, Fresh basil, Grated Parmesan cheese, Ground black pepper, Crushed red pepper (optional for added spice), Fresh mozzarella, Fine sea salt',
        imgUrl: 'https://plus.unsplash.com/premium_photo-1671547330493-b07d377085ca?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]

export default function MenuPage(){
    // const navigate = useNavigate();
    useEffect(()=>{
        document.title = 'Menu'
    },[])
    
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='menuHeaderText'>Menu Page</h1>
                <MenuItemCard name={`${menuDB[0].name}`} desc={`${menuDB[0].desc}`} imgUrl={`${menuDB[0].imgUrl}`} ingredients={`${menuDB[0].ingredients}`}/>
            </div>
        </main>
    )
}