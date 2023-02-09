import Calendar from "./Calendar";
import Details from "./Details";
import React, { useState } from "react";

export const WeekDisplay = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };
  return (
    <>
      <div>
        <Calendar showDetailsHandle={showDetailsHandle} />
        <br />
        {showDetails && <Details data={data} />}
      </div>
    </>
  );
};

export default WeekDisplay;
