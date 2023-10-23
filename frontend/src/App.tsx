import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'

// Importing Components
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

// Pages
import Homepage from './pages/Homepage/Homepage'
import MenuPage from './pages/MenuPage/MenuPage'
import ReservationsPage from './pages/ReservationsPage/ReservationsPage'
import RegistrationPage from './pages/AccountPages/LoginAndRegistration/RegistrationPage'
import LoginPage from './pages/AccountPages/LoginAndRegistration/LoginPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/aboutUs' element={<AboutUsPage/>}/>
          <Route path='/reservations' element={<ReservationsPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
