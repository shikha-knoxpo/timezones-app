import React, { useState } from "react";
import ReactDOM from "react-dom";
import TimezoneSelect from "react-timezone-select";

export const TimezoneSelector = (props) => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const handleChange = (e) =>{
    setSelectedTimezone(e)
    console.log(e.value);
    props.handleChange(e.value);
  }
  return (
    <>
      <p className=" text-left font-bold">TimeZone:</p>

      <div className="select-wrapper">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={handleChange}
          timezones={{
            "Europe/London": "Edinburgh, London",
            "Atlantic/Canary": "Canary Islands",
            "Europe/Lisbon": "Lisbon",
          }}
        />
      </div>
      
    </>
  );
};

export default TimezoneSelector;
