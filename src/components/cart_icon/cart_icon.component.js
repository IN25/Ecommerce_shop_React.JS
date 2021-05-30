import React from "react";
import "./cart_icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart_icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping_icon"></ShoppingIcon>
      <span className="item_counter">{itemCount}</span>
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

//{ cart: { cartItems } } descturctures cartItems from the "state"
const mapStateToProps = ({ cart: { cartItems } }) => {
  //whenever any reducer updated, this gets re-rendered, this is bad for the performance and we do not want to re-render the component if cartItems are the same. So, we use memoization.

  //accumulate all counters in cartItems state
  return {
    itemCount: cartItems.reduce((accumulatedCounter, cartItem) => {
      return (accumulatedCounter += cartItem.counter);
    }, 0),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
