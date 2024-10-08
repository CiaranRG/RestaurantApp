import React from 'react'
import Button from '../../../Components/Button/Button'
import './RegisterForm.scss'
import ErrorMessage from '../../../Components/ErrorMessage/ErrorMessage'
import axios from 'axios'
import { useEffect, useState } from 'react'

// Defining Types
type RegisterInfo = {
    email: string;
    username: string;
    password: string;
}

type registerFormProps = {
    toggleModal: () => void;
}

const apiUrl = import.meta.env.VITE_API_URL;

export default function RegisterForm({ toggleModal }: registerFormProps) {
    const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({ email: '', username: '', password: '' })
    // When setting state with just '' typescript infers that its a string, if you want to be explicit you can add <string> like you usually would.
    const [error, setError] = useState({ show: false, message: '' })
    const [success, setSuccess] = useState({ show: false, message: '' })

    useEffect(() => {
        // If showError is truthy do this and also set a timeout to hide the error display after 3 seconds
        if (error.show) {
            const timer = setTimeout(() => {
                setError({ show: false, message: '' });
            }, 8000); // Telling the callback to run after 8 seconds

            // Setting up a cleanup function to run when the component unmounts, we pass a reference to the timer we want to clear
            return () => clearTimeout(timer);
        }
    }, [error.show]); // Adding the dependencies but making sure it only changes when the show property of the object changes

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            const response = await axios.post(`${apiUrl}/api/accounts`, registerInfo)
            if ((import.meta as any).env.MODE !== 'production') {
                console.log(registerInfo)
            }
            setRegisterInfo({ email: '', username: '', password: '' })
            // Checking for a response and if the token is in the response 
            if (response.data && response.data.token) {
                setSuccess({ show: true, message: 'Your Account has Been Registered' })
            }
            setError({ show: false, message: '' })
            toggleModal()
        } catch (error) {
            if ((import.meta as any).env.MODE !== 'production') {
                console.log('We hit the error somehow', error)
            }
            // Using AxiosError to check if the error is an axios one or some other type of error, also checking to see if there is an error response for below
            if (axios.isAxiosError(error) && error.response) {
                if ((import.meta as any).env.MODE !== 'production') {
                    console.log(error)
                }
                // Checking if the error has data and message properties and if it does we put that in the error message to be used otherwise it will have a generic error message
                if (error.response.data.error === 'Validation error') {
                    setError({ show: true, message: 'Your inputs were not valid, please try again!' })
                } else {
                    // Setting another generic error if its not an axios error
                    setError({ show: true, message: 'An unexpected error has occurred' })
                }
            }
        }
    }
    // Making the type to be a react change event that has either TextAreas or Inputs
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        // Destructuring the values and the type so we can run a check below
        const { name, value } = evt.target;
        setRegisterInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    }

    // Make this type a MouseEvent instead of a FormEvent
    const handleModalClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };

    return (
        <main className='registerFormMainContent'>
            <div onClick={handleModalClick}>
                {error.show === true ? (<ErrorMessage message={error.message} />) : success.show === true ? (<ErrorMessage message={success.message} />) : <div></div>}
                <div className='registerFormDiv'>
                    <h1 className='registerHeaderText'>Create Account</h1>
                    <form className='registerForm' action="" onSubmit={handleSubmit}>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerEmailLabel'>
                                Email: (3-30 Characters)
                            </label>
                            <input type="email" name='email' className='registerEmailInput' value={registerInfo.email} onChange={handleChange} />
                        </div>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerUsernameLabel'>
                                Username: (3-30 Characters, No Spaces)
                            </label>
                            <input type="text" name='username' className='registerUsernameInput' value={registerInfo.username} onChange={handleChange} />
                        </div>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerPasswordLabel'>
                                Password: (3-30 Characters)
                            </label>
                            <input type="password" name='password' className='registerPasswordInput' value={registerInfo.password} onChange={handleChange} />
                        </div>
                        <Button text='Register Now!' />
                    </form>
                </div>
            </div>
        </main>
    )
}