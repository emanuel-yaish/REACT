import React, { useState } from "react";
import CostumInput from "./costumInput";
import "./MarkingDeleting.css";

function MarkingDeleting(props) {
  const [array, setArray] = useState(["one", "two", "three", "four", "five"]);
  const [checkedArray, setCheckedArray] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleInputChange = (e) => {
    const newCheckedArray = [...checkedArray];
    newCheckedArray[e.target.id] = !newCheckedArray[e.target.id];
    setCheckedArray(newCheckedArray);
  };

  const deleteItems = (e) => {
    console.log(checkedArray);
    e.preventDefault();
    const newArray = array.filter((element, index) => !checkedArray[index]);
    setArray(newArray);
    const newCheckArray = [];
    array.forEach((element) => newCheckArray.push(false));
    setCheckedArray(newCheckArray);
  };
  const reset = (e) => {
    e.preventDefault();
    setArray(["one", "two", "three", "four", "five"]);
    setCheckedArray([false, false, false, false, false]);
  };

  return (
    <div className="marking-deleting">
      <form className="marking-deleting-form">
        <button onClick={deleteItems}>Delete</button>{" "}
        <button onClick={reset}>Reset</button>
        {array.map((element, index) => (
          <CostumInput
            onInputChangeCallBack={handleInputChange}
            label={element}
            type="checkbox"
            name={element}
            value={element}
            key={element}
            id={index}
          />
        ))}
      </form>
    </div>
  );
}

export default MarkingDeleting;
