import React from "react";
import "./checkoutpage.scss";
import { connect } from "react-redux";
import CheckOutItem from "../../components/checkout_item/checkout_item.component";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout_page">
      <div className="title">checkout page</div>

      <div className="info">
        <div className="table">
          <span className="table_title">Product</span>
          <span className="table_title">Description</span>
          <span className="table_title">Quantity</span>
          <span className="table_title">Price</span>
          <span className="table_title">Remove</span>
        </div>
        <hr />

        <div className="products">
          {cartItems.length ? (
            cartItems.map((cartItem) => {
              return (
                <CheckOutItem
                  key={cartItem.id}
                  cartItem={cartItem}
                ></CheckOutItem>
              );
            })
          ) : (
            <span className="empty_cart">Your cart is empty</span>
          )}
        </div>
      </div>

      <span className="total">TOTAL:${total}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems: cartItems,

    total: cartItems.reduce((accumulator, cartItem) => {
      return (accumulator += cartItem.counter * cartItem.price);
    }, 0),
  };
};

export default connect(mapStateToProps)(CheckOutPage);
