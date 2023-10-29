import './MenuItemCard.scss'

type MenuItem = {
    name: string;
    desc: string;
    ingredients: string;
    imgUrl: string
}

export default function MenuItemCard({name, desc, ingredients, imgUrl}: MenuItem){
    return (
        <div className='menuItemWrapper' style={{backgroundImage: `url(${imgUrl})`}}>
            <div className='menuItemFade' >
                <main className='menuMainContent'>
                    <h1>{name}</h1>
                    <p>{desc}</p>
                    <h3>Ingredients</h3>
                    <p>{ingredients} </p>
                </main>
            </div>
        </div>
    )
}