import Card from "./Card";

function CardsOptions() {
  return (
    <>
      <div className="row" style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
        <div className="col"></div>
        <div className="col-3" style={{display: "flex"}}>
          <Card
            image={"../images/Hair-Cut.jpeg"}
            title={"Hari Cut"}
            description={
              "Transform Your Look – Fresh, Stylish, and Confidence-Boosting Haircuts Today!"
            }
          />
        </div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Beared-Style.jpeg"}
          title={"Beard Style"}
          description={"Sharpen Your Style  Bold, Clean, and Perfectly Groomed Beards Await!"}
          />
        </div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Facial.jpeg"} 
          title={"Facial"}
          description={"Glow and Refresh  Radiant Facials & Deep Cleansing Face Wash!"}
          />
        </div>
        <div className="col"></div>
      </div>
      <div className="row" style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
        <div className="col"></div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Hair-Color.jpeg"} 
          title={"Hair Color"}
          description={"Revamp Your Look  Vibrant, Bold, and Flawless Hair Coloring!"}
          />
        </div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Hair-Dry.jpeg"}
          title={"Hair Dry"}
          description={"Sleek and Smooth  Perfect Blowouts for Stunning Hair Every Time!"}
          />
          
        </div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Hair-Massage.jpeg"} 
          title={"Head Massage"}
          description={"Relax and Rejuvenate  Soothing Head Massages for Ultimate Stress Relief!"}
          />
        </div>
        <div className="col"></div>
      </div>
      <div className="row" style={{ marginTop: "3rem", marginBottom: "4rem", display: "flex", justifyContent: "space-between" }}>
        <div className="col"></div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Hair-Spa.jpeg"} 
          title={"Hair Spa"}
          description={
            "Nourish and Revive  Luxurious Hair Spa for Silky, Healthy Hair!"}
          />
        </div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Hair-Straight.jpeg"} 
          title={"Hair Straightening"}
          description={"Silky and Sleek  Perfectly Straightened Hair for a Polished Look!"}
          />
        </div>
        <div className="col-3" style={{display: "flex"}}>
          <Card image={"../images/Hair-Wash.jpeg"} 
          title={"Hair Wash"}
          description={
            "Refresh and Revive  Clean, Soft, and Gorgeous Hair with Every Wash!"}/>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default CardsOptions;
