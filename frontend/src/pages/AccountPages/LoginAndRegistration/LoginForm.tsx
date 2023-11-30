import Button from '../../../Components/BookTable/Button'
import './LoginForm.scss'
import axios from 'axios'
import { useState } from 'react'

// Defining Types
type LoginInfo = {
    username: string;
    password: string;
}

export default function LoginForm({ onLogin, toggleModal }){
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({username: '', password: ''})
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/login', loginInfo)
            console.log(response)
            setLoginInfo({username: '', password: ''})
        } catch (error) {
            console.log(error)
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