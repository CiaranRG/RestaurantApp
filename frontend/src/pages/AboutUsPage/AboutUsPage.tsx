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
                    <div className='aboutCard'>
                        <h2 className='aboutHeader'>Our Story</h2>
                        <p className='aboutParagraph'> 
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                        </p>
                    </div>
                    <section className='doubleCard'>
                        <div className='aboutCard'>
                            <h2 className='aboutHeader'>Meet The Team</h2>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our head chef" />
                                <div>
                                    <h2 className='teammateHeader'>Mark Simpson - Head Chef</h2>
                                    <p className='teammateText'>With a keen eye for culinary perfection and a palate seasoned by years of international experience, Chef Mark Simpson is the maestro behind our kitchen's symphony of flavors. His passion for blending traditional techniques with avant-garde innovation promises an unforgettable dining journey.</p>
                                </div>
                            </div>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our sous chef" />
                                <div>
                                    <h2 className='teammateHeader'>Javier Rivera - Sous Chef</h2>
                                    <p className='teammateText'>Sous Chef Javier Rivera, our talented Sous Chef, is a creative force in the kitchen. Known for his precision and ability to thrive under pressure, Javier is the backbone of our culinary operations, ensuring that every dish meets our highest standards.</p>
                                </div>
                            </div>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1496811425508-6d7ebb7ff32c?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our waitress" />
                                <div>
                                    <h2 className='teammateHeader'>Emily Thompson - Head Waitress</h2>
                                    <p className='teammateText'>Emily Thompson, our head waitress, greets every guest with a radiant smile and ensures a delightful dining experience. Her extensive knowledge of our menu and seamless service make her an indispensable part of our restaurant family.</p>
                                </div>
                            </div>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our cashier" />
                                <div>
                                    <h2 className='teammateHeader'>Lily James - Cashier</h2>
                                    <p className='teammateText'>Lily James, the face of our front desk, combines efficiency with charm as she manages the day's transactions. Her attention to detail and warm farewell ensure that every guest's visit ends as pleasantly as it begins.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </main>
    )
}