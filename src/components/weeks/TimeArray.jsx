import { useEffect } from "react";
import { useState } from "react";
const TimeArray = (props) => {
  const [checked, setChecked] = useState([]);
  //const checkListN = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM"];
  const [checkList, setCheckList] = useState([
    new Date(props.dateString + " 08:00:00"),
    new Date(props.dateString + " 08:30:00"),
    new Date(props.dateString + " 09:00:00"),
    new Date(props.dateString + " 09:30:00"),
    new Date(props.dateString + " 10:00:00"),
    new Date(props.dateString + " 10:30:00"),
    new Date(props.dateString + " 11:00:00"),
    new Date(props.dateString + " 11:30:00"),
    new Date(props.dateString + " 12:00:00"),
    new Date(props.dateString + " 12:30:00"),
    new Date(props.dateString + " 13:00:00"),
    new Date(props.dateString + " 13:30:00"),
    new Date(props.dateString + " 14:00:00"),
    new Date(props.dateString + " 14:30:00"),
    new Date(props.dateString + " 15:00:00"),
    new Date(props.dateString + " 15:30:00"),
    new Date(props.dateString + " 16:00:00"),
    new Date(props.dateString + " 16:30:00"),
    new Date(props.dateString + " 17:00:00"),
    new Date(props.dateString + " 17:30:00"),
    new Date(props.dateString + " 18:00:00"),
    new Date(props.dateString + " 18:30:00"),
    new Date(props.dateString + " 19:00:00"),
    new Date(props.dateString + " 19:30:00"),
    new Date(props.dateString + " 20:00:00"),
    new Date(props.dateString + " 20:30:00"),
    new Date(props.dateString + " 21:00:00"),
    new Date(props.dateString + " 21:30:00"),
    new Date(props.dateString + " 22:00:00"),
    new Date(props.dateString + " 22:30:00"),
    new Date(props.dateString + " 23:00:00"),
  ]);
  const [d, setD] = useState(new Date(props.dateString + " 08:00:00"));
  let dArray = [];
  let x = new Date(props.dateString + " 08:00:00");

  for (let i = 0; i < 30; i++) {
    dArray.push(x);
    x.setTime(d.getTime() + 30 * 60 * 1000);
    console.log(x);
  }

  // useEffect(() => {
  //   for (let i = 1; i < 30; i++) {
  //     //setD(d.setTime(d.getTime() + 30 * 60 * 1000));
  //     //setD(checkList[i])
  //     //console.log(d);
  //     let s = checkList[i - 1];
  //     //s = s.setTime(d.getTime() + 30 * 60 * 1000);
  //     console.log(s);
  //     setCheckList((checkList) => [...checkList, s]);
  //     console.log(checkList);
  //   }

  //   // console.log(dArray);
  //   //console.log(d.toDateString().concat(d.getMinutes()));
  //   //setCheckList(dArray);
  //   console.log(checkList);
  // }, []);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  //console.log(checkList);
  return (
    <>
      <div className="">
        <div className="">
          {checkList.map((item, index) => (
            <span key={index}>
              {index % 6 == 0 && <br />}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                value={item}
                type="checkbox"
                onChange={handleCheck}
                className="accent-blue-500"
              />
              &nbsp;
              <span className={isChecked(item)}>
                {new Date(item).getHours()}:{new Date(item).getMinutes()}
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default TimeArray;
