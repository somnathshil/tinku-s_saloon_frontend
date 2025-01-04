import { useState, useEffect} from "react";
import React from 'react';
import UserWindow from "./UserWindow";
import { useNavigate } from "react-router-dom";


const GeneralContext = React.createContext({
      openUserWindow: ()=>{},
      closeUserWindow: ()=>{},
      isLoggedIn: false,
      user: null,
      handleLogout: ()=>{},
      handleLogin: ()=>{},
});

export const GeneralContextProvider = (props)=>{
        const [isUserWindowOpen, setIsUserWindowOpen ] = useState(false);
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

    return(
         <GeneralContext.Provider value={{
            openUserWindow: handleOpenUserWindow,
            closeUserWindow: handleCloseUserWindow,
            isLoggedIn,
            user,
            handleLogout,
            handleLogin,
            }} >
            {props.children}
            {isUserWindowOpen &&  <UserWindow /> }
            
         </GeneralContext.Provider>
    )
}



export default GeneralContext;