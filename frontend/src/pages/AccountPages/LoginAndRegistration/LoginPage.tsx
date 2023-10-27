import Button from '../../../Components/BookTable/Button'
import './LoginPage.scss'
import axios from 'axios'
import { useEffect, useState} from 'react'

// Defining Types
type LoginInfo = {
    username: string;
    password: string;
}

export default function LoginPage(){
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({username: '', password: ''})
    useEffect(()=>{
        document.title = 'Login'
    },[])
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
    return (
        <main className='pageBackground'>
            <div className='pageWrapper'>
                <h1 className='loginHeaderText'>Login Page</h1>
                <h2 className='loginSubheaderText'>This is the subheader text for the login page</h2>
                <div className='loginFormDiv'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='loginFormRow'>
                            <label htmlFor="">
                            Username:
                            </label>
                            <input type="text" name='username' value={loginInfo.username} onChange={handleChange}/>
                        </div>
                        <div className='loginFormRow'>
                            <label htmlFor="">
                            Password:
                            </label>
                            <input type="password" name='password' value={loginInfo.password} onChange={handleChange}/>
                        </div>
                        <Button text='Login'/>
                    </form>
                </div>
            </div>
        </main>
    )
}