import React, { useState } from "react";
import ReactDOM from "react-dom";
import TimezoneSelect from "react-timezone-select";

export const TimezoneSelector = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  return (
    <>
      <p className=" text-left font-bold">TimeZone:</p>

      <div className="select-wrapper">
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          timezones={{
            "Europe/London": "Edinburgh, London",
            "America/Lima": "Pittsburgh",
          }}
        />
      </div>
      {/* <h3>Output:</h3>
      <div
        style={{
          backgroundColor: "#ccc",
          padding: "20px",
          margin: "20px auto",
          borderRadius: "5px",
          maxWidth: "600px",
        }}
      >
        <pre
          style={{
            margin: "0 20px",
            fontWeight: 500,
            fontFamily: "monospace",
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}
        </pre>
      </div> */}
    </>
  );
};

export default TimezoneSelector;
