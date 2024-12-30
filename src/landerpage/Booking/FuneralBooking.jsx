import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

function FuneralBooking({handleBookingClick}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="row " style={{marginTop:"2rem", marginBottom:"5rem"}}>
        <div className="col ">
          <img src="../images/FuneralService.webp" alt="image" style={{
      width: "80%",
    marginLeft: "8rem",
    height: "50vh"
    }}/>
        </div>
        <div className="col ">
          <h4 style={{color: "white", width: "80%"}}>
            Sar Mundan Services for Hindu Rituals
          </h4>
          <p  style={{color: "white", width: "80%"}}>
            At Tinku's Saloon, we honor and respect the deep-rooted traditions
            of Hindu rituals, including Sar Mundan (head shaving) ceremonies
            performed during funerals and post-cremation rites. We provide
            clean, hygienic, and respectful head-shaving services in alignment
            with these sacred customs, ensuring the ritual is conducted with the
            utmost care and reverence. Understanding the emotional significance
            of this ritual, our team approaches each service with compassion,
            professionalism, and respect for the family's beliefs. Whether at
            our saloon or in the privacy of your home, Tinku's Saloon is
            committed to preserving the sanctity of these important traditions,
            supporting you and your family during this time of remembrance and
            reflection.
          </p>
          <button onClick={()=>navigate("/bookingform")} className="booking-btn"
            style={{
              border: "none",
    backgroundColor: "blue",
    borderRadius:" 8PX",
    height: "2.5rem",
    width: "7rem",
    color: "white",
    opacity: ".8",
            }}>
            Book Now
          </button >
        </div>
      </div>
    </>
  );
}

export default FuneralBooking;
