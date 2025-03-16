import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import Navbar from './components/Navbar'
import Dashboard from './pages/DashBoard.jsx'
import PrivateRoute from './components/PrivateRoute'

function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <> 
      <div className='bg-red-950 w-screen min-h-screen flex flex-col'>
      

      <Navbar isLoggedIn = {isLoggedIn}  setIsLoggedIn = {setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>} />
        <Route path="/SingUp" element={<SingUp isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
        <Route path="/Dashboard" element={
          <PrivateRoute isLoggedIn = {isLoggedIn}>
             <Dashboard />
          </PrivateRoute>
          
          } />
      </Routes>
     </div>
     
     
    </>
  )
}

export default App
