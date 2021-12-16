import "./App.css";
import CustomButton from "../CustomButton/CustomButton";
import React from "react";

class App extends React.Component {
  state = { selectedColor: "" };
  colors = ["blue", "red", "yellow"];

  getButtonColor = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div className="App">
        <h1>The color selected is: {this.state.selectedColor}</h1>
        {this.colors.map((color, index) => (
          <CustomButton
            key={index}
            color={color}
            onButtonSelect={this.getButtonColor}
          />
        ))}
      </div>
    );
  }
}

export default App;
