import { UserActionTypes } from "./user.types";

// actions are functions that return objects
export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
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

export const emailSignInFailure = (error) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error,
  };
};

export const checkUserSession = () => {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
};

export const signOutStart = () => {
  return {
    type: UserActionTypes.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
};
