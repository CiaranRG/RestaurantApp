import Button from '../../../Components/BookTable/Button'
import './RegistrationPage.scss'
import axios, { AxiosError } from 'axios'
import { useEffect, useState} from 'react'

// Defining Types
type RegisterInfo = {
    username: string;
    email: string;
    password: string;
}

type ErrorResponse = {
    error: string;
    [key: string]: unknown;
};

export default function RegistrationPage(){
    const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({username: '', email: '', password: ''})
    useEffect(()=>{
        document.title = 'Registration'
    },[])
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/accounts', registerInfo);
            console.log(response);
            setRegisterInfo({username: '', email: '', password: ''});
        } catch (error: unknown) {
            if (error.response) {
                const errorData = error.response.data as ErrorResponse;
                console.log('An error has occurred:', errorData.error);
            } else {
                console.log("Error", error.message);
            }
        }
        // try {
        //     const response = await axios.post('http://localhost:5000/api/accounts', registerInfo)
        //     console.log(response)
        //     setRegisterInfo({username: '', email: '', password: ''})
        // } catch (error) {
        //     console.log(error)
        //     if  (error.response) {
        //         if (error.response.status === 404) {
        //             console.log('404 Error')
        //         } else {
        //             console.log('An error has occurred', error.response.data.error)
        //         }
        //     } else {
        //         console.log("Error", error.message)
        //     }
        // }
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
                <h1 className='registrationHeaderText'>Registration Page</h1>
                <h2 className='registrationSubheaderText'>This is the subheader text for the registration page</h2>
                <div className='registrationFormDiv'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='regiFormRow'>
                            <label htmlFor="">
                            Username:
                            </label>
                            <input type="text" name='username' min={3} max={30} value={registerInfo.username} onChange={handleChange}/>
                        </div>
                        <div className='regiFormRow'>
                            <label htmlFor="">
                            Email:
                            </label>
                            <input type="text" name='email' value={registerInfo.email} onChange={handleChange}/>
                        </div>
                        <div className='regiFormRow'>
                            <label htmlFor="">
                            Password:
                            </label>
                            <input type="password" name='password' value={registerInfo.password} onChange={handleChange}/>
                        </div>
                        <Button text='Register Now!'/>
                    </form>
                </div>
            </div>
        </main>
    )
}