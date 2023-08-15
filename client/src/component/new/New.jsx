import { useState } from "react";
import "./New.css";
const New = () => {
  const [shift, setShift] = useState(false);

  const shiftHandler = () => {
    setShift(!shift);
  };
  return (
    <div className="newContainer">
      <div className={shift ? "nLeftActive" : "nLeft"}>
        <h1>Welcone back</h1>
        <button onClick={shiftHandler}> left</button>
        <button>login</button>
      </div>
      {/* <div className={shift ? "nRightActive" : "nRight"}>
        sign up here
        <button>to</button>
        <button onClick={shiftHandler}>right</button>
      </div> */}
    </div>
  );
};

export default New;
