import { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookingEditWindow.css";

function BookingEditWindow({data}) {
  const { closeBookingEditWindow } = useContext(GeneralContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   name: data.name,
   mobileNumber: data.mobileNumber,
   address: data.address,
   eventName: data.eventName,
   serviceDate: data.serviceDate,
  });

  const handleCloseButton = () => {
    closeBookingEditWindow();
  };

  const  handleChange =  (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
};

const onFormSubmit = async (e)=>{
  e.preventDefault();
  
  try{
  const res =await axios.put(`http://localhost:8080/booking/${data._id}`, formData, {
    withCredentials: true, 
  });

  // const {order} = await res.data;
  // console.log(order);
  navigate("/bookinglist");
  alert(res.data.message); 
  closeBookingEditWindow();
}
catch(error){
  console.log('Error:', error);
  alert(error.response?.data?.message || 'Data entry mistake!!');
}
}
  return (
    <>
      <div
        className="row booking-edit-main-div"
      >
        <button onClick={handleCloseButton} className="close-btn"><i class="fa-solid fa-xmark"></i></button>
        <form
             onSubmit={onFormSubmit}
             className="booking-edit-form"
          >
            <label htmlFor="name" >Your full name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="number" >Your contact details</label>
            <input
              type="number"
              id="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <label htmlFor="address" >Your address details</label>
            <input
              type="text "
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="event"
              style={{ marginBottom: ".3rem" }}
            >
              Select Event:
            </label>
            <select
              id="event"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
              style={{marginBottom:"1rem"}}
            >
              <option value="">Please choose your event</option>
              <option>Marriage Event</option>
              <option>Funeral Event</option>
              <option>Home Service</option>
              <option>Mundan</option>
            </select>

             <label htmlFor="date" >Set your booking date</label>
            <input
              type="date"
              name="serviceDate"
              id="date"
              value={formData.serviceDate}
              onChange={handleChange}
              required
            />

            <button
            className="booking-edit-submit-btn">
              Booking  Update
            </button>
          </form>
      </div>
    </>
  );
}

export default BookingEditWindow;
