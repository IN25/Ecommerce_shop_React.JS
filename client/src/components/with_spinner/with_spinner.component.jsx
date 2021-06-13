import React from "react";
import Spinner from "../spinner/spinner.component.jsx";

const withSpinner = (WrappedComponent) => {
  //destructuring props from the WrappedComponent
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <Spinner></Spinner>
    ) : (
      <WrappedComponent {...otherProps}></WrappedComponent>
    );
  };
};

export default withSpinner;
