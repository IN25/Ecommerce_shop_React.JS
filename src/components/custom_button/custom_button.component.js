import React from "react";

import "./custom_button.scss";

export const CustomButton = ({ value, isGoogleSignIn, ...otherProps }) => (
  <button className="custom_button" {...otherProps}>
    {value}
  </button>
);
