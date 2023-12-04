import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'

// Importing Components
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

// Pages
import Homepage from './pages/Homepage/Homepage'
import MenuPage from './pages/MenuPage/MenuPage'
import ReservationsPage from './pages/ReservationsPage/ReservationsPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'

function App() {
  // We use the !! to convert to a boolean and we then decide if the boolean is true or false based on the truthy/falsy value inside it currently (If theres something inside its truthy)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt'));

  // Creating a function to handle login and logout
  const handleLogin = (token: string) => {
    // Document.cookie attaches all the cookies together separated by a ; and so we use split to create an array which contains all the cookies, we then look specifically for the jsonWebToken.
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwt='));
    // Using the !! to convert it to a boolean and the value of the boolean is going to be based on if the current value in jwtCookie is truthy or falsy
    setIsLoggedIn(!!jwtCookie);
  };

  const handleLogout = () => {
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} onLogin={handleLogin}/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='/aboutUs' element={<AboutUsPage/>}/>
          <Route path='/reservations' element={<ReservationsPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
