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
                <main className='aboutUsMainContent'>
                    <h1 style={{marginTop: '50px'}}>Main Message Here</h1>
                    <div className='aboutCard' style={{maxWidth: '50vw', marginTop: '50px'}}>
                        <h2 className='aboutHeader'>Our Story</h2>
                        <p className='aboutParagraph'> 
                            Nestled in the heart of the city, [Restaurant Name] began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in [Year], 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at [Restaurant Name], we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '50px', justifyContent: 'space-evenly', maxWidth: '90vw'}}>
                        <div className='aboutCard'>
                            <h2 className='aboutHeader'>Meet The Team</h2>
                            <p className='aboutParagraph'> 
                                Nestled in the heart of the city, [Restaurant Name] began as a dream at a small farmer's market, where fresh, 
                                flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in [Year], 
                                our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                                Here at [Restaurant Name], we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                                From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            </p>
                        </div>
                        <div className='aboutCard'>
                            <h2 className='aboutHeader'>Section 2.1</h2>
                            <p className='aboutParagraph'> 
                                Nestled in the heart of the city, [Restaurant Name] began as a dream at a small farmer's market, where fresh, 
                                flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in [Year], 
                                our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                                Here at [Restaurant Name], we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                                From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            </p>
                        </div>
                    </div>
                    <div className='aboutCard' style={{maxWidth: '50vw', marginBottom: '80px'}}>
                        <h2 className='aboutHeader'>Reviews</h2>
                            <p className='aboutParagraph'> 
                                Nestled in the heart of the city, [Restaurant Name] began as a dream at a small farmer's market, where fresh, 
                                flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in [Year], 
                                our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                                Here at [Restaurant Name], we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                                From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            </p>
                    </div>
                </main>
            </div>
        </main>
    )
}