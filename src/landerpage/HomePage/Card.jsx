 import "./card.css";

function Card({image, title, description}) {
    return ( 
        <>
        <div className="card card-indivisual">
        <img
          src={image}
          className="card-img"
          alt="image"
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