import React from "react";
import { CustomButton } from "../custom_button/custom_button.component";
import "./cart_dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart_dropdown">
      <div className="cart_items"></div>
      <CustomButton
        className="custom_button"
        value={"GO TO CHECKOUT"}
      ></CustomButton>
    </div>
  );
};

export default CartDropdown;
