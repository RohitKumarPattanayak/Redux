import { createStore } from "redux";

function counterReducer(state = { value: 1 }, action) {
  switch (action.type) {
    case "incremented":
      return { value: state.value + 1 };
    case "decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

let store = createStore(counterReducer);

store.subscribe(() => console.log("state value : ", store.getState()));

store.dispatch({ type: "incremented" });
store.dispatch({ type: "incremented" });
store.dispatch({ type: "decremented" });
