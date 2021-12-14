import React from "react";
import "./IncrementButton.css";

class IncrementButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }

  //same as code in lines 5 - 8
  state = { counter: 0 };

  increment = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <div className="increment-button">
        <input onClick={this.increment} type="button" value="Increment" />
        <label>{this.state.counter}</label>
      </div>
    );
  }
}

export default IncrementButton;
