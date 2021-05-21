import React from "react";
import "./form_input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form_input" onChange={handleChange} {...otherProps} />

      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form_input_label`} //this label will always have form_input_label className, but whenever a user types something it will have className="shrink form_input_label"
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
