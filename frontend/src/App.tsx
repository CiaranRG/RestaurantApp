import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

  return (
    <Router>
      <Navbar/>
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
