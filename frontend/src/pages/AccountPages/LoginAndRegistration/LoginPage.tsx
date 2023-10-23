import Button from '../../../Components/BookTable/Button'
import './LoginPage.scss'
import axios from 'axios'
import { useEffect, useState} from 'react'

// Defining Types
type RegisterInfo = {
    username: string;
    email: string;
    password: string;
}

export default function LoginPage(){
    const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({username: '', email: '', password: ''})
    useEffect(()=>{
        document.title = 'Login'
    },[])
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/accounts', registerInfo)
            console.log(response)
            setRegisterInfo({username: '', email: '', password: ''})
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
                            <input type="text" name='username' value={registerInfo.username} onChange={handleChange}/>
                        </div>
                        <div className='loginFormRow'>
                            <label htmlFor="">
                            Password:
                            </label>
                            <input type="password" name='password' value={registerInfo.password} onChange={handleChange}/>
                        </div>
                        <Button text='Login'/>
                    </form>
                </div>
            </div>
        </main>
    )
}