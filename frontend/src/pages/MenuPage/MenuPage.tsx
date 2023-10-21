import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import './MenuPage.scss'


export default function MenuPage(){
    // const navigate = useNavigate();
    useEffect(()=>{
        document.title = 'Menu'
    },[])
    
    return(
        <main className='pageBackground'>
            <div className='menuWrapper'>
                <h1 className='menuHeaderText'>Menu Page</h1>
                <h2 className='menuSubheaderText'>This is the subheader text for this menu page</h2>
            </div>
        </main>
    )
}