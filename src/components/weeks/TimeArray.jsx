import { useEffect } from "react";
import { useState } from "react";
const TimeArray = () =>{
    const [checked, setChecked] = useState([]);
  const checkList = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM"];
    const [checkListN,setCheckListN]=useState(["abcdef"]);
  useEffect(()=>{
    setCheckListN(checkListN => [...checkListN,"abc"]);
    console.log("test")
  },[])

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

    console.log(checkListN);
    return(<>
    <div className="flex">
        <div className="flex">
          {checkList.map((item, index) => (
            <div key={index}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input value={item} type="checkbox" onChange={handleCheck} />&nbsp;
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

     </>)
}
export default TimeArray;