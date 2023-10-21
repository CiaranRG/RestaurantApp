import './Button.scss'

// Creating the function and defining the type to be a string on the input
export default function Button({text}: {text: string}){
    return (
        <button className='bookTableButton'>{text}</button>
    )
}