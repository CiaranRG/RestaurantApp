import './MenuItemCard.scss'

type MenuItem = {
    name: string;
    desc: string;
    ingredients: string;
}

export default function MenuItemCard({name, desc, ingredients}: MenuItem){
    return (
        <div className='menuItemDiv'>
            <div className='menuItemFade'>
                <main className='menuMainContent'>
                    <h1>{name}</h1>
                    <h4>{desc} </h4>
                    <h3>Ingredients</h3>
                    <h4>{ingredients} </h4>
                </main>
            </div>
        </div>
    )
}