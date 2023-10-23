import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import './AboutUsPage.scss'


export default function AboutUsPage(){
    // const navigate = useNavigate();
    useEffect(()=>{
        document.title = 'About Us'
    },[])
    
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='aboutUsHeaderText'>AboutUs Page</h1>
                <h2 className='aboutUsSubheaderText'>This is the subheader text for this menu page</h2>
            </div>
        </main>
    )
}