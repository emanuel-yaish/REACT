import "./App.css";
import IncrementButton from "../IncrementButton/IncrementButton";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IncrementButton />
      </div>
    );
  }
}

export default App;
