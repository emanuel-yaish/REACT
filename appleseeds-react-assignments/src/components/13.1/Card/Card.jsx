import React from "react";

function Card({ userName, birthday, favoriteMeats, favoriteFishFoods }) {
  return (
    <div>
      <div>{userName}</div>
      <div>{birthday}</div>
      {favoriteMeats.map((meat) => (
        <div key={meat}>{meat}</div>
      ))}
      {favoriteFishFoods.map((fish) => (
        <div key={fish}>{fish}</div>
      ))}
    </div>
  );
}

export default Card;
