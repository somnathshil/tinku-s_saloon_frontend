import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

function WeddingBooking({handleBookingClick}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="row " style={{ 
          marginTop: "2rem",
          marginBottom: "5rem",
          marginLeft: "7rem", 
          }}>
        <div className="col ">
          <h4 style={{color: "white", width: "80%"}}>
          Bridal & Groom Wedding Services – Look Your Best on Your Special
          Day!
          </h4>
          <p style={{color: "white", width: "80%"}}>
            At Tinku's Saloon, we know that your wedding day is one of the
            most important moments of your life. Our exclusive wedding services
            are designed to make you look and feel extraordinary. From elegant
            bridal hairstyles and glowing facials to sharp grooming and beard
            styling for grooms, we offer personalized packages to ensure you
            shine with confidence. Whether it’s for the bride, groom, or the
            entire wedding party, our experienced stylists bring creativity and
            precision to every detail. We also provide on-location services to
            ensure you stay relaxed and stress-free on your big day. Trust
            Tinku's Saloon to add that perfect touch of glamour and
            sophistication, making your wedding day truly unforgettable!
          </p>
          <button onClick={()=>navigate("/bookingform")} className="booking-btn" style={{
            border: "none",
            backgroundColor: "blue",
            borderRadius: "8PX",
            height: "2.5rem",
            width: "7rem",
            color: "white",
            opacity: ".8",
          }}>
            Book Now
          </button>
        </div>
        <div className="col ">
          <img
            src="../images/WeddingService.jpg"
            alt="image"
            style={{
              width: "80%",
          height: "50vh",  
            }}
           />
        </div>
      </div>
    </>
  );
}

export default WeddingBooking;
