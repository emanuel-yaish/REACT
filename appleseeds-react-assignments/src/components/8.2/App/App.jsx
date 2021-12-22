import "./App.css";
import Box from "../components/Box";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Box height="10rem" width="10rem" />
        <Box height="5rem" width="5rem" />
        <Box height="15rem" width="15rem" />
        <Box height="3rem" width="3rem" />
      </div>
    );
  }
}

export default App;
