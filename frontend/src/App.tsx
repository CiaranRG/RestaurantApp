import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'

// Importing Components
import Navbar from './Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import MenuPage from './pages/MenuPage/MenuPage'
import ReservationsPage from './pages/ReservationsPage/ReservationsPage'
import RegistrationPage from './pages/AccountPages/LoginAndRegistration/RegistrationPage'

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/menu' element={<MenuPage/>}/>
          <Route path='/reservations' element={<ReservationsPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
