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
import isIOS from './utils/isIOS'

function App() {
  // Using this function to check if isLoggedIn is already in local storage and if it is then what its value is
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Creating a function to handle login and logout
  const handleLogin = () => {
    // With the way we have it setup this function will only run if the person successfully logs in and there is no other way this function runs otherwise
    setIsLoggedIn(true);
  };


  // Add a request interceptor so we can send things from localStorage to the backend
  axios.interceptors.request.use((config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('jwt');

    // If a token exists, add it to the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Continue with the request
    return config;
  }, (error) => {
    // Handle request error
    return Promise.reject(error);
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  // Creating a logout function that queries the backend and then clears the cookie
  const handleLogout = async () => {
    try {
      // Make a request to the backend logout route
      await axios(`${apiUrl}/api/accounts/logout`, { method: 'POST', withCredentials: true })
      if (isIOS()) {
        localStorage.removeItem('jwt')
      }
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
      try {
        let loginStatus = await loginCheck()
        if (isIOS()) {
          alert('On IOS')
          const jwtToken = localStorage.getItem('jwt');
          if (jwtToken) {
            alert(`JWT found in localStorage: ${jwtToken}`);
            console.log(`JWT found in localStorage: ${jwtToken}`);
            loginStatus = true;
          } else {
            alert("No JWT found in localStorage.");
            console.log("No JWT found in localStorage.");
          }
        }
        setIsLoggedIn(loginStatus)
        alert(`Final login status: ${loginStatus}`);
      } catch (err) {
        if (import.meta.env.MODE !== 'production') {
          console.log(err)
        }
        setIsLoggedIn(false)
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
