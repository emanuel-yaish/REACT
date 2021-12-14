import "./App.css";
import IncrementAndDecrement from "../IncrementAndDecrement/IncrementAndDecrement";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IncrementAndDecrement />
      </div>
    );
  }
}

export default App;
