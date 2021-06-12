import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with_spinner.styles";

const withSpinner = (WrappedComponent) => {
  //destructuring props from the WrappedComponent
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps}></WrappedComponent>
    );
  };
};

export default withSpinner;
