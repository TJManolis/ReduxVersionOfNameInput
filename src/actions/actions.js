import { CHANGE_FIRST_NAME } from "../constants/action-types";

export const changeFirstName = name => ({
  type: CHANGE_FIRST_NAME,
  payload: name
});
