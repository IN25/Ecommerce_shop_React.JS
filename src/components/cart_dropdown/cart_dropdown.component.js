import React from "react";
import { CustomButton } from "../custom_button/custom_button.component";
import "./cart_dropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart_item/cart_item.component";
// import { selectCartItems } from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  console.log("cartItems = ", cartItems);
  return (
    <div className="cart_dropdown">
      <div className="cart_items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>;
          })
        ) : (
          <span className="empty_cart">Your cart is empty</span>
        )}
      </div>

      <div className="button">
        <Link to="/checkout">
          <CustomButton
            onClick={toggleCartHidden}
            className="custom_button"
            value={"GO TO CHECKOUT"}
          ></CustomButton>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartItems: state.cart.cartItems };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => {
      return dispatch(toggleCartHidden());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
