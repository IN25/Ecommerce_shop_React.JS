import React from "react";

import { CustomButtonContainer } from "./custom_button.styles";

export const CustomButton = ({ value, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{value}</CustomButtonContainer>
);
