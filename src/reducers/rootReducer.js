import { CHANGE_FIRST_NAME } from "../constants/action-types";
import { otherState } from "./otherState";

const initialState = {
  ...otherState,
  firstName: "First Name"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
