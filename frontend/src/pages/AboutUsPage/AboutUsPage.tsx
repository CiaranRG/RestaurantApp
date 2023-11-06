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
                    <div className='aboutCard' style={{maxWidth: '50vw', marginTop: '0px'}}>
                        <h2 className='aboutHeader'>Our Story</h2>
                        <p className='aboutParagraph'> 
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '50px', justifyContent: 'space-evenly', maxWidth: '90vw', marginBottom: '20px'}}>
                        <div className='aboutCard'>
                            <h2 className='aboutHeader'>Meet The Team</h2>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our head chegf" />
                                <div>
                                    <h2 className='teammateHeader'>John Cena - Head Chef</h2>
                                    <p className='teammateText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod fuga, quidem tempore odio dignissimos maxime, sapiente dolore aut labore illo suscipit, eveniet libero similique dolor repellendus sunt velit a?</p>
                                </div>
                            </div>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our head chegf" />
                                <div>
                                    <h2 className='teammateHeader'>John Cena - Head Chef</h2>
                                    <p className='teammateText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod fuga, quidem tempore odio dignissimos maxime, sapiente dolore aut labore illo suscipit, eveniet libero similique dolor repellendus sunt velit a?</p>
                                </div>
                            </div>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our head chegf" />
                                <div>
                                    <h2 className='teammateHeader'>John Cena - Head Chef</h2>
                                    <p className='teammateText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod fuga, quidem tempore odio dignissimos maxime, sapiente dolore aut labore illo suscipit, eveniet libero similique dolor repellendus sunt velit a?</p>
                                </div>
                            </div>
                            <div className='teammateCard'>
                                <img className='teammateImg' src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of our head chegf" />
                                <div>
                                    <h2 className='teammateHeader'>John Cena - Head Chef</h2>
                                    <p className='teammateText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod fuga, quidem tempore odio dignissimos maxime, sapiente dolore aut labore illo suscipit, eveniet libero similique dolor repellendus sunt velit a?</p>
                                </div>
                            </div>
                        </div>
                        <div className='aboutCard'>
                            <h2 className='aboutHeader'>Section 2.1</h2>
                            <p className='aboutParagraph'> 
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            Nestled in the heart of the city, Bella Cucina began as a dream at a small farmer's market, where fresh, 
                            flavorful ingredients inspired the creation of meals that both comfort and excite. Founded in 1999, 
                            our doors opened to bring a fusion of traditional recipes and innovative dining to our beloved community.
                            Here at Bella Cucina, we believe that every dish should tell a story as rich and compelling as the flavors it carries. 
                            From the simmering sauces to the locally sourced produce, every plate is a celebration of culture, quality, and the joy of shared experiences.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    )
}