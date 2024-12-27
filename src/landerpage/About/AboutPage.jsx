function AboutPage() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row mt-5 p-5">
          <h1 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            aperiam.
          </h1>
        </div>
        <div className="row">
          <div className="col">
            <h4 style={{ color: "white" }}>
              Welcome to Tinku's Saloon Where Style Meets Perfection!
            </h4>
            <p style={{ color: "white" }}>
              At Tinku's Saloon, we believe that a great hairstyle is more than
              just a look; it's an expression of confidence and personality. Our
              skilled and passionate team of stylists is committed to delivering
              the highest quality services, whether it's a fresh haircut, a bold
              new hair color, or a relaxing head massage. We use only the best
              products to ensure your hair not only looks fantastic but feels
              healthy and rejuvenated. Each client is treated with the utmost
              care and attention, ensuring that you leave our saloon feeling
              revitalized, confident, and ready to conquer the world.
            </p>
          </div>
          <div className="col">
            <h4 style={{ color: "white" }}>
              Your Go-To Destination for All Things Beauty & Grooming!
            </h4>
            <p style={{ color: "white" }}>
              From trendy haircuts and beard styling to luxurious facials and
              hair treatments, Tinku's Saloon offers a full range of grooming
              services for both men and women. Our modern, cozy environment is
              designed to make you feel at ease, while our team works to enhance
              your natural beauty. Whether you're preparing for a special
              occasion or simply want to unwind, we are here to provide you with
              the best salon experience. Discover the perfect blend of comfort,
              style, and expertise at Tinku's Saloon where your beauty is our
              passion.
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <img src="../images/About-Image.jpeg" alt="image" style={{width:"25rem", height:"25rem", marginLeft:"4rem",
                borderRadius:"100%"
            }} />
            <h4 style={{textAlign:"center", color:"white", marginTop:"1.5rem"}}>Asit Shil</h4>
            <h5 style={{textAlign:"center", color:"white"}}>Founder, Owner</h5>
          </div>
          <div className="col">
            <h3 style={{ color: "white", marginBottom:"3rem" }}>People</h3>
            <p style={{ color: "white", }}>
             Tinku's Saloon was founded
              by Asit Shil, lovingly known as Tinku, in 2018 in the heart of
              Kalna, Purba Burdwan, West Bengal, India. With a passion for
              beauty and grooming, Tinku set out to create a space where
              customers could experience high-quality, personalized service in a
              welcoming and professional environment. Over the years, Tinku has
              honed his skills and built a loyal customer base through his
              dedication, attention to detail, and commitment to enhancing each
              client’s look. His vision was to offer top-notch salon services
              that cater to all grooming needs while making every visit a
              memorable experience. Today, Tinku's Saloon stands as a testament
              to his hard work, passion, and love for the art of styling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
