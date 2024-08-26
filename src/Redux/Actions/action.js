export const addUser = (item) => {
  return {
    type: "add",
    payload: item,
  };
};
export const viewUser = (item) => {
  return {
    type: "view",
    payload: item,
  };
};
export const deleteUser = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};
export const updateUser = (item) => {
  return {
    type: "update",
    payload: item,
  };
};
export const updateUser1 = (item) => {
  return {
    type: "update1",
    payload: item,
  };
};
