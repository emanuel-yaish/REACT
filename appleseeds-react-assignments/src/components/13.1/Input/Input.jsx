import React from "react";

function Input(props) {
  return (
    <div className="input">
      <input
        onChange={(e) => props.updateKeyword(e.target.value)}
        type="text"
        placeholder="filter avatars"
      />
    </div>
  );
}

export default Input;
