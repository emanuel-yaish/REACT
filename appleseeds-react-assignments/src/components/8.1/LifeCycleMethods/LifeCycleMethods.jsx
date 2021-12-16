import React from "react";
import "./LifeCycleMethods.css";

class LifeCycleMethods extends React.Component {
  state = { favoriteColor: 0 };

  increment = () => {
    if (this.state.counter >= 10) return;
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  decrement = () => {
    if (this.state.counter <= -10) return;
    this.setState((state) => ({ counter: state.counter - 1 }));
  };

  counterColor = () =>
    this.state.counter > 0 ? "green" : this.state.counter === 0 ? "" : "red";

  render() {
    return (
      <div className="life-cycle-methods">
        <h1>My favorite color is {this.state.favoriteColor}}</h1>
        <label className={this.counterColor()}>{this.state.counter}</label>
        <input onClick={this.increment} type="button" value="+" />
      </div>
    );
  }
}

export default LifeCycleMethods;
