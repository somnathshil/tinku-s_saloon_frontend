import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function BookingFormPage() {
  const navigate = useNavigate();
   const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    address: "",
    eventName: "",
    serviceDate: "",
   });

  const  handleChange =  (e)=>{
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onFormSubmit = async (e)=>{
    e.preventDefault();
    
    try{
    const res = await axios.post("http://localhost:8080/booking", formData, {
      withCredentials: true, 
    });

    const {order} = await res.data;
    console.log(order);
    navigate("/");
    alert(res.data.message); 
  }
  catch(error){
    // console.log('Error:', error);
    alert(error.response?.data?.message || 'Data entry mistake!!');
}
}


  return (
    <>
      <div className="row" style={{ marginTop: "7rem" }}>
        <div className="col-2"></div>
        <div className="col">
          <h1
            style={{
              color: "#EFBF04",
              textAlign: "center",
              marginBottom: ".5rem",
            }}
          >
            Booking Details
          </h1>
          <h4  style={{
              color: "#EFBF04",
              textAlign: "center",
              marginBottom: "1rem",
            }}>Tinku's Saloon</h4>
          <form
             onSubmit={onFormSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginLeft: "15rem",
            }}
          >
            <label htmlFor="name" style={{color:"#CCBA78"}}>Your full name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              id="name"
              name="name"
              value={formData.name}
              style={{
                marginBottom: "1rem",
                borderRadius: "10px",
                border: "none",
              }}
              onChange={handleChange}
              required
            />
            <label htmlFor="number" style={{color:"#CCBA78"}}>Your contact details</label>
            <input
              type="number"
              placeholder="Enter your mobile number"
              id="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              style={{
                marginBottom: "1rem",
                borderRadius: "10px",
                border: "none",
              }}
              onChange={handleChange}
              required
            />
            <label htmlFor="address" style={{color:"#CCBA78"}}>Your address details</label>
            <input
              type="text "
              placeholder="Enter your address"
              name="address"
              value={formData.address}
              style={{
                marginBottom: "1rem",
                borderRadius: "10px",
                border: "none",
              }}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="event"
              style={{ color: "#CCBA78", marginBottom: ".3rem" }}
            >
              Select Event:
            </label>
            <select
              id="event"
              name="eventName"
              value={formData.eventName}
              style={{
                marginBottom: "1rem",
                borderRadius: "10px",
                border: "none",
              }}
              onChange={handleChange}
              required
            >
              <option value="">Please choose your event</option>
              <option>Marriage Event</option>
              <option>Funeral Event</option>
              <option>Home Service</option>
            </select>

             <label htmlFor="date" style={{color:"#CCBA78"}}>Set your booking date</label>
            <input
              type="date"
              style={{
                marginBottom: "2rem",
                borderRadius: "10px",
                border: "none",
              }}
              placeholder="Set your booking date"
              name="serviceDate"
              id="date"
              value={formData.serviceDate}
              onChange={handleChange}
              required
            />


            <button
              style={{
                width: "15rem",
                marginBottom: "3rem",
                backgroundColor: "green",
                border: "none",
                borderRadius: "8px",
                color: "white",
                height:"2rem"
              }}
            >
              Booking Confirm
            </button>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default BookingFormPage;
