import Button from '../../../Components/BookTable/Button'
import './registerForm.scss'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

// Defining Types
type RegisterInfo = {
    email: string;
    username: string;
    password: string;
}

export default function RegisterForm(){
    const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({email: '', username: '', password: ''})
    // When setting state with just '' typescript infers that its a string, if you want to be explicit you can add <string> like you usually would.
    const [error, setError] = useState({show: false, message: ''})
    const [success, setSuccess] = useState({show: false, message: ''})

    useEffect(() => {
        // If showError is true, set a timeout to hide the error after 3 seconds
        if (error.show) {
            const timer = setTimeout(() => {
                setError({show: true, message: 'Your inputs are invalid, try again!'});
            }, 8000); // Telling the callback to run after 8 seconds

            // Setting up a cleanup function to run when the component unmounts, we pass a reference to the timer we want to clear
            return () => clearTimeout(timer);
        }
    }, [error.show]); // Adding the dependencies but making sure it only changes when the show property of the object changes

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/accounts', registerInfo)
            setRegisterInfo({email: '', username: '', password: ''})
            console.log(response)
            setShowError(false)
        } catch (error) {
            // Using AxiosError to check if the error is an axios one or some other type of error, also checking to see if there is an error response for below
            if (axios.isAxiosError(error) && error.response){
                // Checking if the error has data and message properties and if it does we put that in the error message to be used otherwise it will have a generic error message
                if (error.response.data.error === 'Validation Error') {
                    setErrorMessage('Your Inputs were not valid, please try again!');
                } else {
                    // Setting another generic error if its not an axios error
                    setErrorMessage('An Unexpected error occurred!')
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

    const handleModalClick = (evt: React.FormEvent<HTMLFormElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };
    
    return (
        <main className='registerFormMainContent'>
            <div onClick={handleModalClick}>
                <div className='registerFormDiv'>
                <h1 className='registerHeaderText'>Create Account</h1>
                <h2 className='registerSubheaderText'>Use the form below to create your account!</h2>
                    <form className='registerForm' action="" onSubmit={handleSubmit}>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerEmailLabel'>
                            Email: (3-30 Characters)
                            </label>
                            <input type="email" name='email' className='registerEmailInput'  value={registerInfo.email} onChange={handleChange}/>
                        </div>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerUsernameLabel'>
                            Username: (3-30 Characters)
                            </label>
                            <input type="text" name='username' className='registerUsernameInput' value={registerInfo.username} onChange={handleChange}/>
                        </div>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerPasswordLabel'>
                            Password: (3-30 Characters)
                            </label>
                            <input type="password" name='password' className='registerPasswordInput' value={registerInfo.password} onChange={handleChange}/>
                        </div>
                        <Button text='Register Now!'/>
                    </form>
                </div>
            </div>
        </main>
    )
}