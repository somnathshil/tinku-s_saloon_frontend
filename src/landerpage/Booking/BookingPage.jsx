import { useContext, useEffect } from "react";
import FuneralBooking from "./FuneralBooking";
import HomeService from "./HomeService";
import WeddingBooking from "./WeddingBooking";
import GeneralContext from "../GeneralContext";
import { useNavigate } from "react-router-dom";

function BookingPage() {
    const {isLoggedIn} = useContext(GeneralContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if (!isLoggedIn) {
            alert("Log in first");
            navigate("/");
        }
    }, [])
   
    return ( 
            <>
              <HomeService />
              <WeddingBooking />
              <FuneralBooking />
            </>
     );
}

export default BookingPage;
