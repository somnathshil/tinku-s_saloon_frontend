import { useNavigate } from "react-router-dom";

function HomeService({handleBookingClick}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="row " style={{ marginTop: "10rem", marginBottom:"5rem" }}>
        <div className="col">
          <img
            src="../images/HomeService.jfif"
            alt="image"
            style={{ width: "70%", marginLeft: "8rem" }}
          />
        </div>
        <div className="col ">
          <h4 style={{ color: "white", width:"80%" }}>
            Tinku's Saloon – Premium Salon Services at Your Doorstep!
          </h4>
          <p style={{ color: "white", width:"80%" }}>
            At Tinku's Saloon, we understand that your time is valuable. That’s
            why we offer convenient home service to bring our professional
            grooming and styling right to your doorstep. Whether it’s a haircut,
            beard styling, hair spa, or facial, our expert team ensures you
            receive the same top-tier salon experience in the comfort of your
            home. Perfect for busy schedules, special occasions, or those who
            simply prefer a private experience, our home services are designed
            to provide relaxation and quality care without stepping outside.
            Experience the luxury of personalized grooming with Tinku's Saloon –
            wherever you are, we bring style to you!
          </p>
          <button
            style={{
              border: "none",
              backgroundColor: "blue",
              borderRadius: "8PX",
              height:"2.5rem",
              width:"7rem",
              color:"white"
            }}

            onClick={()=>navigate("/bookingform")}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeService;
