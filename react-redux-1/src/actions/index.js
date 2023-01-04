export const addMark = (value) => {
  return {
    type: "add",
    value: value,
  };
};

export const subMark = (value) => {
  return {
    type: "sub",
    value: value,
  };
};
