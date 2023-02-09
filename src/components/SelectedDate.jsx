import { useEffect, useState } from "react";
const SelectedDate = (props) => {
  const [cmonth, setCMonth] = useState("");
  useEffect(() => {
    if (props.currentDate.getMonth() + 1 === 1) {
      setCMonth("January");
    } else if (props.currentDate.getMonth() + 1 === 2) {
      setCMonth("February");
    } else if (props.currentDate.getMonth() + 1 === 3) {
      setCMonth("March");
    } else if (props.currentDate.getMonth() + 1 === 4) {
      setCMonth("April");
    } else if (props.currentDate.getMonth() + 1 === 5) {
      setCMonth("May");
    } else if (props.currentDate.getMonth() + 1 === 6) {
      setCMonth("June");
    } else if (props.currentDate.getMonth() + 1 === 7) {
      setCMonth("July");
    } else if (props.currentDate.getMonth() + 1 === 8) {
      setCMonth("August");
    } else if (props.currentDate.getMonth() + 1 === 9) {
      setCMonth("September");
    } else if (props.currentDate.getMonth() + 1 === 10) {
      setCMonth("October");
    } else if (props.currentDate.getMonth() + 1 === 11) {
      setCMonth("November");
    } else if (props.currentDate.getMonth() + 1 === 12) {
      setCMonth("December");
    }
  }, []);

  return (
    <>
      <p>
        {cmonth}, {props.currentDate.getDate()},
        {props.currentDate.getFullYear()}
      </p>
    </>
  );
};

export default SelectedDate;
