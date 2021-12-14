import React from "react";
import "./HideAndSeek.css";

class HideAndSeek extends React.Component {
  state = { hidden: "" };

  changeDisplay = () => {
    this.setState((state) => ({ hidden: state.hidden === "" ? "hidden" : "" }));
  };

  render() {
    return (
      <div className="hide-and-seek">
        <input onClick={this.changeDisplay} type="button" value="show/hide" />
        <div className={`square yellow ${this.state.hidden}`}></div>
      </div>
    );
  }
}

export default HideAndSeek;
