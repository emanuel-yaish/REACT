import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <figure className="card-figure">
          <img
            className="card-image"
            src={this.props.img}
            alt={this.props.imgAlt}
          />
        </figure>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <div className="buttons-container">
          <input type="button" value={this.props.leftButton} />
          <input type="button" value={this.props.rightButton} />
        </div>
      </div>
    );
  }
}

export default Card;
