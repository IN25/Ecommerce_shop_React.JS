import React from "react";
import "./cart_icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart_icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping_icon"></ShoppingIcon>
      <span className="item_counter">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => {
      return dispatch(toggleCartHidden());
    },
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
