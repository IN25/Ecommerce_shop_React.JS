import React from "react";

import "./custom_button.scss";

export const CustomButton = ({
  isGoogleSignIn,
  inverted,
  value,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google_sign_in" : ""
    } custom_button`}
    {...otherProps}
  >
    {value}
  </button>
);
