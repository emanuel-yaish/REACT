import React from "react";
import "./IncrementAndDecrement.css";

class IncrementAndDecrement extends React.Component {
  state = { counter: 0 };

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
      <div className="increment-button">
        <input onClick={this.decrement} type="button" value="-" />
        <label className={this.counterColor()}>{this.state.counter}</label>
        <input onClick={this.increment} type="button" value="+" />
      </div>
    );
  }
}

export default IncrementAndDecrement;
