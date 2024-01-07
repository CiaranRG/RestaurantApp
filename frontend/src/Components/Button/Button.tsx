import './Button.scss'

// Defining types
type ButtonProps = {
    text: string;
    classProp?: string;
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

// Creating the function and defining the type to be a string on the input
export default function Button({text, classProp, onClick,}: ButtonProps){
    return (
        <button className={`bookTableButton ${classProp}`} onClick={onClick}>
        {text}
        </button>
    )
}