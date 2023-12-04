import Button from '../../../Components/BookTable/Button'
import './LoginForm.scss'
import axios from 'axios'
import { useState } from 'react'

// Defining Types
type LoginInfo = {
    username: string;
    password: string;
}

type LoginProps = {
    onLogin: (token: string) => void;
    toggleModal: () => void;
}

export default function LoginForm({ onLogin, toggleModal }: LoginProps){
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({username: '', password: ''})
    const [error, setError] = useState({show: false, message: ''})

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            // Need to add the option withCredentials for axios to accept the cookie since we have our front and backends on different origins
            const response = await axios.post('http://localhost:5000/api/accounts/login', loginInfo, { withCredentials: true })
            const token = onLogin(response.data.token)
            toggleModal()
            setLoginInfo({username: '', password: ''})
        } catch (error) {
            if (axios.isAxiosError(error) && error.response){
                // Checking if the error has data and message properties and if it does we put that in the error message to be used otherwise it will have a generic error message
                if (error.response.data.error === 'Invalid Credentials') {
                    setError({show: true, message: 'Your inputs were not valid, please try again!'})
                    console.log(error)
                } else {
                    // Setting another generic error if its not an axios error
                    setError({show: true, message: 'An unexpected error has occurred'})
                    console.log(error)
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

    const handleModalClick = (evt: React.FormEvent<HTMLFormElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };
    
    return (
        <main className='loginFormMainContent'>
            <div onClick={handleModalClick}>
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