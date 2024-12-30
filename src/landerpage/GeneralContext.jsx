import { useState, useEffect} from "react";
import React from 'react';
import UserWindow from "./UserWindow";


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