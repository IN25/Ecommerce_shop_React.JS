import { UserActionTypes } from "./user.types";

// actions are functions that return objects
export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
