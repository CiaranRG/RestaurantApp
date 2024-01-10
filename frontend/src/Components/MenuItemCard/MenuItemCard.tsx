import './MenuItemCard.scss'

type MenuItem = {
    name: string;
    description: string;
    imgUrl: string
}

export default function MenuItemCard({name, description, imgUrl}: MenuItem){
    
    return (
        <div className='menuItemWrapper' style={{backgroundImage: `url(${imgUrl})`}}>
            <div className='menuItemFade' >
                <main className='menuMainContent'>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </main>
            </div>
        </div>
    )
}