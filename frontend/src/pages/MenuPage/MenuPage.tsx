import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import './MenuPage.scss'
import MenuItemCard from '../../Components/MenuItemCard/MenuItemCard'


const menuDB = [
    {
        name: 'Pasta',
        desc: 'Indulge in our authentic Italian pasta, a symphony of flavors harmoniously blended to tantalize your taste buds. Freshly made from durum wheat, our pasta is cooked al dente, ensuring a delightful bite. Draped in our signature marinara sauce, every mouthful promises a gastronomic experience reminiscent of a quaint Italian bistro.',
        ingredients: 'Durum wheat pasta, Fresh tomatoes, Garlic cloves, Olive oil, Fresh basil, Grated Parmesan cheese, Ground black pepper, Crushed red pepper (optional for added spice), Fresh mozzarella, Fine sea salt'
    },
    {
        name: 'Lasagna',
        desc: 'Indulge in our authentic Italian pasta, a symphony of flavors harmoniously blended to tantalize your taste buds. Freshly made from durum wheat, our pasta is cooked al dente, ensuring a delightful bite. Draped in our signature marinara sauce, every mouthful promises a gastronomic experience reminiscent of a quaint Italian bistro.',
        ingredients: 'Durum wheat pasta, Fresh tomatoes, Garlic cloves, Olive oil, Fresh basil, Grated Parmesan cheese, Ground black pepper, Crushed red pepper (optional for added spice), Fresh mozzarella, Fine sea salt'
    }
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
                <MenuItemCard name={`${menuDB[0].name}`} desc={`${menuDB[0].desc}`} ingredients={`${menuDB[0].ingredients}`}/>
                <MenuItemCard name={`${menuDB[1].name}`} desc={`${menuDB[1].desc}`} ingredients={`${menuDB[1].ingredients}`}/>
            </div>
        </main>
    )
}