import React, { useState } from "react";
import ReactDOM from "react-dom";
import TimezoneSelect from "react-timezone-select";

export const TimezoneSelector = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const handleChange = () =>{}
  return (
    <>
      <p className=" text-left font-bold">TimeZone:</p>

      <div className="select-wrapper">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          timezones={{
            "Europe/London": "Edinburgh, London",
            "America/Lima": "Pittsburgh"
          }}
        />
      </div>
      
    </>
  );
};

export default TimezoneSelector;
