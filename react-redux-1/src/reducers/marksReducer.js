const initialization = 0;
const marksChange = (state = initialization, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "sub":
      return state - action.value;
    default:
      return state;
  }
};

export default marksChange;
