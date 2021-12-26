import React, { useState } from "react";
import CostumInput from "./costumInput";
import "./Time.css";

function Time(props) {
  const [time, setTime] = useState({
    seconds: "",
    minutes: "",
    hours: "",
  });

  const handleInputChange = (e) => {
    const newTime = { ...time };

    if (e.target.name === "seconds") {
      newTime[e.target.name] = e.target.value;
      newTime.minutes = newTime.seconds / 60;
      newTime.hours = newTime.minutes / 60;
      setTime(newTime);
    }
    if (e.target.name === "minutes") {
      newTime[e.target.name] = e.target.value;
      newTime.seconds = e.target.value * 60;
      newTime.hours = newTime.minutes / 60;
      setTime(newTime);
    }
    if (e.target.name === "hours") {
      newTime[e.target.name] = e.target.value;
      newTime.minutes = newTime.hours * 60;
      newTime.seconds = newTime.minutes * 60;
      setTime(newTime);
    }
  };

  return (
    <div className="time">
      <form className="App">
        <CostumInput
          onInputChangeCallBack={handleInputChange}
          label="seconds"
          type="text"
          name="seconds"
          value={time.seconds}
        />

        <CostumInput
          name="minutes"
          label="minutes"
          type="text"
          value={time.minutes}
          onInputChangeCallBack={handleInputChange}
        />

        <CostumInput
          onInputChangeCallBack={handleInputChange}
          label="hours"
          type="text"
          name="hours"
          value={time.hours}
        />
      </form>
    </div>
  );
}

export default Time;
