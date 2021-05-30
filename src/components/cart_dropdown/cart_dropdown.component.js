import React from "react";
import { CustomButton } from "../custom_button/custom_button.component";
import "./cart_dropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart_item/cart_item.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart_dropdown">
      <div className="cart_items">
        {cartItems.map((cartItem) => {
          console.log(cartItem);
          return <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>;
        })}
      </div>

      <div className="button">
        <CustomButton
          className="custom_button"
          value={"GO TO CHECKOUT"}
        ></CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cartItems: state.cart.cartItems };
};

export default connect(mapStateToProps)(CartDropdown);
