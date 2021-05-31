import swal from "sweetalert";

const initialState = {
  userData: [],
};

export const userReducer = (state = initialState, action) => {
  const checkAlreadyAdded = state.userData.find(
    (data) => data.email === action.payload.email
  );
  switch (action.type) {
    case "ADD_USER_DATA": {
      const newData = {
        ...state,
        userData: checkAlreadyAdded
          ? (swal("Hold UP!", "The Email is Already Added", "error"),
            [...state.userData])
          : [...state.userData, action.payload],
        // userData: [...state.userData, action.payload],
      };
      return newData;
    }
    case "DELETE_USER_DATA":
      const newData = {
        ...state,
        userData: state.userData.filter((data) => data !== action.payload),
      };
      return newData;
    default:
      return state;
  }
};
