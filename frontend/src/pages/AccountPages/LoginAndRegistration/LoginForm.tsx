import Button from '../../../Components/Button/Button'
import './LoginForm.scss'
import axios from 'axios'
import ErrorMessage from '../../../Components/ErrorMessage/ErrorMessage'
import { useState, useEffect} from 'react'

// Defining Types
type LoginInfo = {
    username: string;
    password: string;
}
type LoginProps = {
    onLogin: () => void;
    toggleModal: () => void;
}

const apiUrl = import.meta.env.VITE_API_URL;

export default function LoginForm({ onLogin, toggleModal }: LoginProps){
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({username: '', password: ''})
    const [error, setError] = useState({show: false, message: ''})

    useEffect(() => {
        // If showError is truthy do this and also set a timeout to hide the error display after 3 seconds
        if (error.show) {
            const timer = setTimeout(() => {
                setError({show: false, message: ''});
            }, 8000); // Telling the callback to run after 8 seconds

            // Setting up a cleanup function to run when the component unmounts, we pass a reference to the timer we want to clear
            return () => clearTimeout(timer);
        }
    }, [error.show]); // Adding the dependencies but making sure it only changes when the show property of the object changes

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            // Need to add the option withCredentials for axios to accept the cookie since we have our front and backends on different origins
            await axios.post(`${apiUrl}/api/accounts/login`, loginInfo, { withCredentials: true })
            onLogin()
            toggleModal()
            setLoginInfo({username: '', password: ''})
        } catch (err) {
            if (axios.isAxiosError(err) && err.response){
                if (import.meta.env.MODE !== 'production') {
                    console.log(err)
                }
                // Checking if the error has data and message properties and if it does we put that in the error message to be used otherwise it will have a generic error message
                if (err.response.data.error === 'Invalid Credentials') {
                    setError({show: true, message: "That user doesn't exist!"})
                } else if (err.response.data.error === 'Validation Error') {
                    setError({show: true, message: 'Your inputs are invalid, try again!'})
                } else {
                    setError({show: true, message: 'An unexpected error has occurred'})
                }
            }
        }

    }
    // Making the type to be a react change event that has either TextAreas or Inputs
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        // Destructuring the values and the type so we can run a check below
        const { name, value } = evt.target;
        setLoginInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    }

    const handleModalClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };
    
    return (
        <main className='loginFormMainContent'>
            <div onClick={handleModalClick}>
            { error.show === true ? (<ErrorMessage message={error.message}/>) : <div></div>}
                <div className='loginFormDiv'>
                <h1 className='loginHeaderText'>Login Here!</h1>
                    <form className='loginForm' action="" onSubmit={handleSubmit}>
                        <div className='loginFormRow'>
                            <label htmlFor="" className='loginUsernameLabel'>
                            Username:
                            </label>
                            <input type="text" name='username' className='loginUsernameInput' value={loginInfo.username} onChange={handleChange}/>
                        </div>
                        <div className='loginFormRow'>
                            <label htmlFor="" className='loginPasswordLabel'>
                            Password:
                            </label>
                            <input type="password" name='password' className='loginPasswordInput' value={loginInfo.password} onChange={handleChange}/>
                        </div>
                        <Button text='Login'/>
                    </form>
                </div>
            </div>
        </main>
    )
}