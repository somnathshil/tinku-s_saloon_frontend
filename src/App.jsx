import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import HomePage from './landerpage/HomePage/HomePage.jsx'
import Navbar from './landerpage/Navbar.jsx';
import Footer from './landerpage/Footer.jsx';
import AboutPage from './landerpage/About/AboutPage.jsx';
import BookingPage from './landerpage/Booking/BookingPage.jsx';
import SignupPage from './landerpage/Signup/SignupPage.jsx';
import WorkDemoPage from './landerpage/WorkDemo/WorkDemoPage.jsx';
import LoginPage from './landerpage/Login/LoginPage.jsx';
import LogoutPage from './landerpage/Logout/LogoutPage.jsx';
import BookingFormPage from './landerpage/BookingForm/BookingFormPage.jsx';


  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setIsLoggedIn(true);
          setUser(JSON.parse(storedUser));
        }
      }, [isLoggedIn]);

      const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUser(null);
      };

    return ( 
        <BrowserRouter>
  <Navbar isLoggedIn={isLoggedIn} user={user} />
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/booking' element={<BookingPage/>} />
    <Route path='/signup' element={<SignupPage/>} />
    <Route path='/workdemo' element={<WorkDemoPage/>} />
    <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}/>
    <Route path='/logout' element={<LogoutPage handleLogout={handleLogout} /> }/>
    <Route path='/bookingform' element={< BookingFormPage />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     );
  }
  
  export default App;