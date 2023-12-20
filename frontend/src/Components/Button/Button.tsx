import './Button.scss'

// Defining types
type ButtonProps = {
    text: string;
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

// Creating the function and defining the type to be a string on the input
export default function Button({text, onClick}: ButtonProps){
    return (
        <button className='bookTableButton' onClick={onClick}>
        {text}
        </button>
    )
}