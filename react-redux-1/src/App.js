import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMark } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const stateValue = useSelector((state) => state.marksChange);
  const [addValue, setAddValue] = React.useState(1);
  const [subValue, setSubValue] = React.useState(1);

  function handleChange(e) {
    if (e.target.name === "addValue") {
      setAddValue(Number(e.target.value));
    } else if (e.target.name === "subValue") {
      setSubValue(Number(e.target.value));
    }
  }

  return (
    <div>
      <h1>USER : {stateValue} </h1>
      <div>
        <div>
          <input name="addValue" onChange={handleChange} />
          <button onClick={() => dispatch(changeMark("add", addValue))}>
            add marks
          </button>
        </div>
        <div>
          <input name="subValue" onChange={handleChange} />
          <button onClick={() => dispatch(changeMark("sub", subValue))}>
            sub marks
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
