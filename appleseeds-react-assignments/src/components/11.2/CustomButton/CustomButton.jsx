import React from "react";
import "./CustomButton.css";

class CustomButton extends React.Component {
  render() {
    return (
      <div className="custom-button">
        <input
          onClick={this.props.onButtonSelect(this.props.color)}
          className={this.props.color}
          type="button"
          value={this.props.color}
        />
      </div>
    );
  }
}

export default CustomButton;
