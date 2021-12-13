import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <figure className="card-figure">
        <img className="card-image" src={props.img} alt={props.imgAlt} />
      </figure>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div className="buttons-container">
        <input type="button" value={props.leftButton} />
        <input type="button" value={props.rightButton} />
      </div>
    </div>
  );
}

export default Card;
