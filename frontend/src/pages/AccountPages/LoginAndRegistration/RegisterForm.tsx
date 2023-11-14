import Button from '../../../Components/BookTable/Button'
import './registerForm.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

// Defining Types
type RegisterInfo = {
    email: string;
    username: string;
    password: string;
}

export default function RegisterForm(){
    const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({email: '', username: '', password: ''})
    useEffect(()=>{
        document.title = 'register'
    },[])
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/register', registerInfo)
            console.log(response)
            setRegisterInfo({email: '', username: '', password: ''})
        } catch (error) {
            console.log(error)
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
                            Email:
                            </label>
                            <input type="email" name='email' className='registerEmailInput'  value={registerInfo.email} onChange={handleChange}/>
                        </div>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerUsernameLabel'>
                            Username:
                            </label>
                            <input type="text" name='username' className='registerUsernameInput' value={registerInfo.username} onChange={handleChange}/>
                        </div>
                        <div className='registerFormRow'>
                            <label htmlFor="" className='registerPasswordLabel'>
                            Password:
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