import React from "react";
import "./cart_icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className="cart_icon">
      <ShoppingIcon className="shopping_icon"></ShoppingIcon>
      <span className="item_counter">0</span>
    </div>
  );
};

export default CartIcon;
