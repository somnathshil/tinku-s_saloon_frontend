import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GeneralContext from "../GeneralContext";
import "./BookingList.css";
// import { Link } from "react-router-dom";

function BookingList() {
    const [fetchUserData, setFetchUserData] = useState([]);
    const {user, openBookingEditWindow, openBookingCancelWindow} =  useContext(GeneralContext);

  
     

    useEffect( ()=>{
      
        const fetchData = async ()=>{
          
        if(user && user._id){
          try{
                const res = await axios.get(`http://localhost:8080/user/${user._id}`,   
                    {
                        withCredentials: true  
                    },);
                    console.log((res.data.fetchUser.orders));
                    setFetchUserData(res.data.fetchUser.orders);
                  }  catch (error) {
                    console.error("Error fetching data:", error);
                    alert(error.response?.data?.message || 'Localstore data fetching problem!!');
                }
              }
        };
    fetchData();
    }, [user, openBookingEditWindow, openBookingCancelWindow]);


    useEffect(() => {
      console.log(fetchUserData);  // Logs after data is fetched
  }, [fetchUserData]);

  const handleEditButton = (item)=>{
    openBookingEditWindow(item);
  };
    
  const handleCancelButton = (items)=>{
    openBookingCancelWindow(items);
  };

    return ( 
    <>
          
             <div className="row"  style={{marginTop:"8rem", color:"white",}}>
              <h1 className="heading">Your Booking List</h1>


              {fetchUserData.length === 0 ? (
                <h2 className="nothing-booked">Your booking list is empty!!</h2>
              ) : (
              fetchUserData.map((item, index)=>(
                    <div id={index} className="booking-lists-card">
                    <h2>{item.name}</h2>
                  <p>{item.address}</p>
                  <p>{item.mobileNumber}</p>
                  <p>For {item.eventName}</p>
                  <p>Booking Date: {item.serviceDate}</p>
                   <p>Booked At: {new Date(item.createdAt).toISOString().split('T')[0]}</p>
                    <button className="booking-edit-btn" onClick={()=> handleEditButton(item)}> Edit </button>
                   <button className="booking-cancel-btn" onClick={()=>handleCancelButton(item)}> Cancel </button>
                  </div>
              ))
              )}

             </div>
           
      
     </>
     );
}

export default BookingList;