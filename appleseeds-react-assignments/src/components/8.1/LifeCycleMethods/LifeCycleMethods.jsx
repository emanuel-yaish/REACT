import React from "react";
import "./LifeCycleMethods.css";

class LifeCycleMethods extends React.Component {
  state = { favoriteColor: "blue" };

  componentDidMount() {
    setTimeout(this.updateColor, 1000);
  }

  componentDidUpdate() {
    const elemnt = document.querySelector("#favorite-color");
    elemnt.textContent = "The updated favorite color is red ";
  }

  updateColor = () => {
    this.setState({ favoriteColor: "green" });
  };

  render() {
    return (
      <div className="life-cycle-methods">
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="favorite-color"></div>
      </div>
    );
  }
}

export default LifeCycleMethods;
