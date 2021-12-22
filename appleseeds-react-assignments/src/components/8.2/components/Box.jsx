import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  state = { slide: "" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ slide: "slide" });
    }, 1000);
  }

  render() {
    return (
      <div
        className={`box ${this.state.slide}`}
        style={{ height: this.props.height, width: this.props.width }}
      ></div>
    );
  }
}

export default Box;
