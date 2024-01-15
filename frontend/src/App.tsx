import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.scss'
import axios from 'axios'

// Importing Components
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

// Pages
import Homepage from './pages/Homepage/Homepage'
import MenuPage from './pages/MenuPage/MenuPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import AccountPage from './pages/AccountPages/MyAccountPages/AccountPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'

// Importing utilities
import loginCheck from './utils/loginCheck'

function App() {
  // We use the !! to convert to a boolean and we then decide if the boolean is true or false based on the truthy/falsy value inside it currently (If theres something inside its truthy)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Creating a function to handle login and logout
  const handleLogin = () => {
    // With the way we have it setup this function will only run if the person successfully logs in and there is no other way this function runs otherwise
    setIsLoggedIn(true);
  };

  // Creating a logout function that queries the backend and then clears the cookie
  const handleLogout = async () => {
    try {
      // Make a request to the backend logout route
      // I had to restructure the axios request for some reason from what I had which was this - await axios.post('http://localhost:5000/api/accounts/logout', { withCredentials: true });
      axios('http://localhost:5000/api/accounts/logout', {method: 'POST', withCredentials: true})
      // Update the client-side state, e.g., set isLoggedIn to false
      setIsLoggedIn(false);
    } catch (err) {
      if (import.meta.env.MODE === 'development') {
        console.log('Logout failed');
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isLoggedIn = await loginCheck()
        if (!isLoggedIn){
          setIsLoggedIn(false)
        } else {
          setIsLoggedIn(true)
        }
      } catch (err) {
        if (import.meta.env.MODE === 'development') {
          console.log(err)
        }
      }
    }
    checkLogin()
  }, [])  



  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} onLogin={handleLogin}/>
        <Routes>
          {/* Passing in a isLoggedIn state to our page so we can use it to make decisions within the homepage */}
          <Route path='/' element={<Homepage isLoggedIn={isLoggedIn}/>}/>
          <Route path='/home' element={<Homepage isLoggedIn={isLoggedIn}/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='/aboutUs' element={<AboutUsPage/>}/>
          {isLoggedIn ? (
          // These can only be access when the isLoggedIn state is true 
          <>
            <Route path="/accountPage" element={<AccountPage onLogout={handleLogout}/>} />
          </>
        ) : (
          // If there was anything here it could only be accessed when logged out
          <>
            <Route path="/accountPage" element={<ErrorPage errorCode={401} errorMessage='Unauthorized Access!'/>} />
          </>
        )}
        {/* This is out catch all route for when the url doesn't match any other route */}
        <Route path="*" element={<ErrorPage/>} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
