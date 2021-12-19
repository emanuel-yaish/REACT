import React from "react";

function Avatar({ name, url, desctiption }) {
  return (
    <div className="avatar">
      <h2 className="avatar-name">{name}</h2>
      <div className="avatar-img-container">
        <img src={url} alt={desctiption} />
      </div>
    </div>
  );
}

export default Avatar;
