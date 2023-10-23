import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import './GalleryPage.scss'


export default function GalleryPage(){
    // const navigate = useNavigate();
    useEffect(()=>{
        document.title = 'Gallery'
    },[])
    
    return(
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='galleryHeaderText'>Gallery Page</h1>
                <h2 className='gallerySubheaderText'>This is the subheader text for this gallery page</h2>
            </div>
        </main>
    )
}