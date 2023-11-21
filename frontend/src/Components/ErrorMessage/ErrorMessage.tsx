import './ErrorMessage.scss'

type Error = {
    message: string
}

export default function ErrorMessage({message}: Error){
    return (
        <div className='errorDiv'>
            <p className='errorMessage'>{message}</p>
        </div>
    )
}