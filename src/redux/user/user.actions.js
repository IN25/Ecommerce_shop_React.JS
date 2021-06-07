import { UserActionTypes } from "./user.types";

// actions are functions that return objects
export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  };
};

export const googleSignInSuccess = (user) => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const googleSignInFailure = (error) => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error,
  };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword, //gets an object with the email and password properties
  };
};

export const emailSignInSuccess = (user) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const emailSignInFailure = (error) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error,
  };
};
