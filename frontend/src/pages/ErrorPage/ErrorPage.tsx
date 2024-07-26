import './ErrorPage.scss'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

type ErrorPageProps = {
    errorCode?: number,
    errorMessage?: string 
}

// Setting defaults in the event nothing is passed as props and also nothing is coming from useNavigate
export default function ErrorPage({errorCode = 404, errorMessage = "This page doesn't exist"}: ErrorPageProps){
    // Setting up useLocation to get the contents of the navigate if there are any
    const location = useLocation();
    // Checking if there is any error passed through useNavigate and saving it here to be used as the main code and message 
    const stateErrorCode = location.state?.errorCode;
    const stateErrorMessage = location.state?.errorMessage;
    // Deciding on the final message and code to be displayed, if there is nothing in the first part of the or statement then it will use the second 
    const finalErrorCode = stateErrorCode || errorCode;
    const finalErrorMessage = stateErrorMessage || errorMessage;

    return(
        <>
            <main className='pageBackground'>
                <div className='pageWrapper'>
                    <h1 className='errorHeaderText'>{finalErrorCode}</h1>
                    <h2 className='errorHeaderTextTwo'>{finalErrorMessage}</h2>
                    <Link to='/home' className='errorHomeLink' style={{textDecoration: 'none'}}>
                        Click here to go home!
                    </Link>
                </div>
            </main>
        </>
    )
}