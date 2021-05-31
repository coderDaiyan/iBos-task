export const addUserData = (payload) => {
  return {
    type: "ADD_USER_DATA",
    payload,
  };
};

export const deleteUserData = (payload) => {
  return {
    type: "DELETE_USER_DATA",
    payload,
  };
};
