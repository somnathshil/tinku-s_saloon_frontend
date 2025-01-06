import { useContext } from "react";
import "./BookingCancelWindow.css"
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function BookingCancelWindow({data}) {
    const navigate = useNavigate();
    const {closeBookingCancelWindow} = useContext(GeneralContext);
    
    const handleCloseButton = ()=>{
        closeBookingCancelWindow();
    };
    
    const onClickYes = async ()=>{
        try{
            if(data._id){
            const res =await axios.delete(`http://localhost:8080/booking/${data._id}`, {
              withCredentials: true, 
            });

            // const {result} = await res.data;
            // console.log(result);
            navigate("/bookinglist");
            alert(res.data.message); 
            closeBookingCancelWindow();
        } else{
            navigate("/bookinglist");
            alert("data._id not fetched!"); 
        }
          }
          catch(error){
            console.log('Error:', error);
            alert(error.response?.data?.message || 'Data entry mistake!!');
          }
          
    }
    return ( 
        <>
       <div className="booking-cancel-main-div">
        <button onClick={handleCloseButton} className="cross-btn"><i class="fa-solid fa-xmark"></i></button>
        <h2>Are you sure want to cancel your {data.name} named booking??</h2>
        <button className="cancel-yes-btn" onClick={onClickYes}>Yes</button>
        <button className="cancel-no-btn" onClick={handleCloseButton}>No</button>
       </div>
        </>
     );
}

export default BookingCancelWindow;