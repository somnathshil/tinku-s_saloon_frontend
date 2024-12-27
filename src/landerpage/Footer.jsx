import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row footer-info">
          <div className="col">
            <h4 style={{ color: "white", opacity: ".7" }}>Home Service</h4>
            <ul style={{ listStyle: "none", padding: "0", color: "white", opacity: ".7" }}>
              <li>For Old Mens</li>
              <li>Hair Cut</li>
              <li>Beard Style</li>
              <li>Massage</li>
              <li>Hair Color</li>
            </ul>
          </div>
          <div className="col ">
            <h4 style={{ color: "white", opacity: ".7" }}>Home Service Children</h4>
            <ul style={{ listStyle: "none", padding: "0", color: "white", opacity: ".7" }}>
              <li>For Children</li>
              <li>Special Cut</li>
              <li>Trimming</li>
              <li>Children Caring Cut</li>
              <li>Hygienic Tools Used</li>
            </ul>
          </div>
          <div className="col ">
            <h4 style={{ color: "white", opacity: ".7" }}>Family Package</h4>
            <ul style={{ listStyle: "none", padding: "0", color: "white", opacity: ".7" }}>
              <li>Beard Shaving</li>
              <li>Eyebrow Plucking Men &  Women Both</li>
              <li>Hair Straightening Male & Female Both</li>
              <li>Female Hair Cut </li>
              <li>Men's Formal Cut</li>
            </ul>
          </div>
          <div className="col ">
            <h4 style={{ color: "white", opacity: ".7" }}>Wedding Special</h4>
            <ul style={{ listStyle: "none", padding: "0", color: "white", opacity: ".7" }}>
              <li>Groom Decorating</li>
              <li>Wedding Family Package</li>
              <li>Wedding Facial Package</li>
              <li>Wedding Hair Spa</li>
              <li>Wedding Hair Cut</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 footer-social-signup">
          <hr style={{ color: "white", marginBottom: "3rem" }} />
          <div className="col">
            <label htmlFor="email" style={{ color: "white", opacity: ".7" }}>
              SignUp With Email:
            </label>
            <input type="text" id="email" />
            <button
              style={{
                border: "2px solid white",
                height: "1.9rem",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Go
            </button>
          </div>
          <div className="col">
            <form>
              <label for="service-select" style={{ color: "white", opacity: ".7" }}>
                Region:
              </label>
              <select id="service-select" name="service" required>
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="haircut">Haircut & Styling</option>
                <option value="facial">Facial Treatment</option>
                <option value="manicure">Manicure & Pedicure</option>
                <option value="coloring">Hair Coloring</option>
                <option value="scalp">Scalp Treatment</option>
              </select>

              <button
                type="submit"
                style={{
                  border: "2px solid white",
                  height: "1.7rem",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col">
            <div className="socials-icon">
              <a href="">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ textAlign: "center", marginTop: "1.5rem" }}
        >
          <p style={{ fontSize: ".8rem", color: "white", opacity: ".4" }}>
            Copyright &copy; Tinku's Saloon India || Terms & Conditions Apply ||
            Privacy Policy
          </p>
          <p style={{ fontSize: ".8rem", color: "white", opacity: ".4" }}>
            Pirtala More, Kalna, Purba Burdhaman, West Bengal, India, 713409
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
