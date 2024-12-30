// import React, { useEffect, useState } from 'react';
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
import BookingFormPage from './landerpage/BookingForm/BookingFormPage.jsx';
import { GeneralContextProvider } from './landerpage/GeneralContext.jsx';


  function App() {
    
    return ( 
      
        <BrowserRouter>
        <GeneralContextProvider>
       <Navbar />
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/booking' element={<BookingPage/>} />
    <Route path='/signup' element={<SignupPage/>} />
    <Route path='/workdemo' element={<WorkDemoPage/>} />
    <Route path='/login' element={<LoginPage  />}/>
    <Route path='/bookingform' element={< BookingFormPage />}/>
    </Routes>
    <Footer/>
    </GeneralContextProvider>
    </BrowserRouter>
    
     );
  }
  
  export default App;
