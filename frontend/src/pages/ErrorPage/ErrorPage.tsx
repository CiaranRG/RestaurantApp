import './ErrorPage.scss'
import { Link } from "react-router-dom"

type ErrorPageProps = {
    errorCode?: string,
    errorMessage?: string 
}

export default function ErrorPage({errorCode, errorMessage}: ErrorPageProps){

    // Setting up defaults incase nothing is passed in
    const code = errorCode || 404
    const message = errorMessage || "This page doesn't exist"

    return(
        <>
            <main className='pageBackground'>
                <div className='pageWrapper'>
                    <h1 className='errorHeaderText'>{code}</h1>
                    <h2 className='errorHeaderTextTwo'>{message}</h2>
                    <Link to='/home' style={{textDecoration: 'none'}}>
                        <a className='errorHomeLink'>Click here to go home!</a>
                    </Link>
                </div>
            </main>
        </>
    )
}