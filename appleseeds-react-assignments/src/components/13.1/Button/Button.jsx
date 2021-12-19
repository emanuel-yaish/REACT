import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <input onClick={props.applyFilter} type="button" value="filter" />
    </div>
  );
}

export default Button;
