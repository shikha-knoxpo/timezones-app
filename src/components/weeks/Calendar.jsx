import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import TimezoneSelector from "../TimezoneSelector";
import SelectedDate from "../SelectedDate";
import TimeArray from "./TimeArray";

const Calendar = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          {/* <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div> */}
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          {/* <div className="icon" onClick={() => changeMonthHandle("next")}>next month</div> */}
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <>
          <div
            className="text-left justify-start items-start text-red-600 font-bold"
            key={i}
          >
            {format(addDays(startDate, i), dateFormat)}
          </div>
          <br />
          <br />
          <br />
          <br />
        </>
      );
    }
    return <div className="w-auto">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <>
            <div
              className={` ${
                isSameDay(day, new Date())
                  ? "today"
                  : isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
              }`}
              key={day}
              onClick={() => {
                const dayStr = format(cloneDay, "ccc dd MMM yy");
                onDateClickHandle(cloneDay, dayStr);
              }}
            >
              <span className="flex">
                {formattedDate}/{format(currentMonth, "MM")}{" "}
                {day <= new Date() ? (
                  <span className="font-bold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PAST
                  </span>
                ) : (
                  <TimeArray />
                )}
              </span>
            </div>
            <br />
            <br />
            <br />
            <br />
          </>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="text-left justify-start items-start" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  const renderFooter = () => {
    return (
      <div className="grid grid-cols-3 text-blue-700 ">
        <div className="">
          <div
            className="ml-0 pl-0 justify-start text-left hover:cursor-pointer"
            onClick={() => changeWeekHandle("prev")}
          >
            Previous Week
          </div>
        </div>
        {/* <div>{currentWeek}</div> */}
        <div className="text-black">
          <SelectedDate currentDate={new Date()} />
        </div>
        <div className="text-right" onClick={() => changeWeekHandle("next")}>
          <div className="hover:cursor-pointer">Next week</div>
        </div>
      </div>
    );
  };
  return (
    <div className="">
      {/* {renderHeader()}
      
       */}
      {renderFooter()}.
      <TimezoneSelector />
      <br />
      <br />
      <div className="flex space-x-1">
        <div>{renderDays()}</div>
        <div></div>
        {renderCells()}
      </div>
    </div>
  );
};

export default Calendar;
/**
 * Header:
 * icon for switching to the previous month,
 * formatted date showing current month and year,
 * another icon for switching to next month
 * icons should also handle onClick events to change a month
 */
