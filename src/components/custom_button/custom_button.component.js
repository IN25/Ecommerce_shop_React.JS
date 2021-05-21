import React from "react";
import "./custom_button.scss";

export const CustomButton = ({value}) => {
  return (
    <button className="custom_button">
      {value}
    </button>
  );
};
