import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMark, subMark } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const [addValue, setAddValue] = React.useState(1);
  const [subValue, setSubValue] = React.useState(1);
  const stateValue = useSelector((state) => state.marksChange);

  function addHandleChange(e) {
    setAddValue(Number(e.target.value));
  }

  function subHandleChange(e) {
    setSubValue(Number(e.target.value));
  }

  return (
    <div>
      <h1>USER : {stateValue} </h1>
      <div>
        <div>
          <input name="addValue" onChange={addHandleChange} />
          <button onClick={() => dispatch(addMark(addValue))}>add marks</button>
        </div>
        <div>
          <input name="subValue" onChange={subHandleChange} />
          <button onClick={() => dispatch(subMark(subValue))}>sub marks</button>
        </div>
      </div>
    </div>
  );
};

export default App;
