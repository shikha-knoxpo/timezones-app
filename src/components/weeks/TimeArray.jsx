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
  
  
  // Tried to create a dynamic Time Array but couldn't finish due to lack of time

  // useEffect(() => {
  //   for (let i = 1; i < 30; i++) {
  //     //setD(d.setTime(d.getTime() + 30 * 60 * 1000));
  //     //setD(checkList[i])
  //     let s = checkList[i - 1];
  //     //s = s.setTime(d.getTime() + 30 * 60 * 1000);
  //     setCheckList((checkList) => [...checkList, s]);
  //   }

  //   //setCheckList(dArray);
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
             
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                value={item}
                type="checkbox"
                onChange={handleCheck}
                class="bg-red-500 border-red-500 text-blue-500 focus:ring-red-200"
              />
              &nbsp;
              <span className={isChecked(item)}>
                {new Date(item).getHours()}:{new Date(item).getMinutes()}
                {new Date(item).getMinutes()<10 && <>0</>}
              </span>
              {index % 15 == 0 && <br />}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default TimeArray;
