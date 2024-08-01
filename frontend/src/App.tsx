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
  // Using this function to check if isLoggedIn is already in local storage and if it is then what its value is
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initial state based on local storage value
    const storedValue = localStorage.getItem('isLoggedIn');
    return storedValue === 'true'; // Convert string to boolean
  });

  // Creating a function to handle login and logout
  const handleLogin = () => {
    // With the way we have it setup this function will only run if the person successfully logs in and there is no other way this function runs otherwise
    setIsLoggedIn(true);
  };

  // Creating a logout function that queries the backend and then clears the cookie
  const handleLogout = async () => {
    try {
      // Make a request to the backend logout route
      axios('http://localhost:5000/api/accounts/logout', { method: 'POST', withCredentials: true })
      // Update the client-side state, e.g., set isLoggedIn to false
      setIsLoggedIn(false);
    } catch (err) {
      if (import.meta.env.MODE !== 'production') {
        console.log('Logout failed');
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      if(!isLoggedIn){
        try {
          const isLoggedIn = await loginCheck()
          setIsLoggedIn(isLoggedIn)
          localStorage.setItem('isLoggedIn', isLoggedIn); // Store in local storage
        } catch (err) {
          if (import.meta.env.MODE !== 'production') {
            console.log(err)
          }
          setIsLoggedIn(false)
        }
      } else {
        console.log('You are already logged in!')
      }
    }
    checkLogin()
  }, [])



  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} onLogin={handleLogin} />
      <Routes>
        {/* Passing in a isLoggedIn state to our page so we can use it to make decisions within the homepage */}
        <Route path='/' element={<Homepage isLoggedIn={isLoggedIn} />} />
        <Route path='/home' element={<Homepage isLoggedIn={isLoggedIn} />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/aboutUs' element={<AboutUsPage />} />
        {isLoggedIn ? (
          // These can only be access when the isLoggedIn state is true 
          <>
            <Route path="/accountPage" element={<AccountPage onLogout={handleLogout} />} />
          </>
        ) : (
          // If there was anything here it could only be accessed when logged out
          <>
            <Route path="/accountPage" element={<ErrorPage errorCode={401} errorMessage='Unauthorized Access!' />} />
          </>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
