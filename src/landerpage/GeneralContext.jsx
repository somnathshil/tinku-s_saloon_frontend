import { useState, useEffect} from "react";
import React from 'react';
import UserWindow from "./UserWindow";
import { useNavigate } from "react-router-dom";
import BookingEditWindow from "./BookingEditWindow";
import BookingCancelWindow from "./BookingCancelWindow";



const GeneralContext = React.createContext({
      openUserWindow: ()=>{},
      closeUserWindow: ()=>{},
      isLoggedIn: false,
      user: null,
      handleLogout: ()=>{},
      handleLogin: ()=>{},
      openBookingEditWindow: (item)=>{},
      closeBookingEditWindow: ()=>{},
      openBookingCancelWindow:(items)=>{},
      closeBookingCancelWindow:()=>{}
});

export const GeneralContextProvider = (props)=>{
        const [isUserWindowOpen, setIsUserWindowOpen ] = useState(false);
        const [isBookingEditWindow, setIsBookingEditWindow] = useState(false);
        const [bookingUserData, setBookingUserData] = useState({});
        const [isBookingCancelWindow, setIsBookingCancelWindow] = useState(false);
        const [bookingCancelData, setBookingCancelData] = useState({});
        const navigate = useNavigate();

        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [user, setUser] = useState(null);

          useEffect(() => {
              const storedUser = localStorage.getItem('user');
              if (storedUser) {
                setIsLoggedIn(true);
                setUser(JSON.parse(storedUser));
              }
            }, [isLoggedIn]);
    
       const handleLogin = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
              setIsLoggedIn(true);
              setUser(JSON.parse(storedUser));
            }
          };

          const handleLogout = () => {
            localStorage.removeItem('user');
            setIsLoggedIn(false);
            setUser(null);
            navigate("/");

          };

        const handleOpenUserWindow = ()=>{
            setIsUserWindowOpen(true);
        };

        const handleCloseUserWindow = ()=>{
            setIsUserWindowOpen(false);
        };

        const handleOpenBookingEditWindow = (item)=>{
          setIsBookingEditWindow(true);
          setBookingUserData(item);
          
        };

        const handleCloseBookingEditWindow = ()=>{
          setIsBookingEditWindow(false);
          setBookingUserData({});
        };

        const handleOpenBookingCancelWindow = (items)=>{
          setIsBookingCancelWindow(true);
          setBookingCancelData(items);
        };

        const handleCloseBookingCancelWindow = ()=>{
          setIsBookingCancelWindow(false);
          setBookingCancelData({});
        };
    return(
         <GeneralContext.Provider value={{
            openUserWindow: handleOpenUserWindow,
            closeUserWindow: handleCloseUserWindow,
            isLoggedIn,
            user,
            handleLogout,
            handleLogin,
            openBookingEditWindow: handleOpenBookingEditWindow,
            closeBookingEditWindow: handleCloseBookingEditWindow,
            openBookingCancelWindow: handleOpenBookingCancelWindow,
            closeBookingCancelWindow: handleCloseBookingCancelWindow,
            }} >
            {props.children}
            {isUserWindowOpen &&  <UserWindow /> }
             {isBookingEditWindow && <BookingEditWindow data={bookingUserData}/>}
             {isBookingCancelWindow && <BookingCancelWindow data={bookingCancelData}/>}
            
         </GeneralContext.Provider>
    )
}



export default GeneralContext;