
function Card({image, title, description}) {
    return ( 
        <>
        <div className="card equal-height" style={{width: "100%", display: "flex", flexDirection: "column"}}>
        <img
          src={image}
          className="card-img-top"
          alt="image"
          style={{height:"35vh"}}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="" className="btn btn-primary">
           Check Details
          </a>
        </div>
      </div>
        </>
     );
}

export default Card;