import React from "react";
import "./checkout_item.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { removeFromCart } from "../../redux/cart/cart.actions";

const CheckOutItem = ({ cartItem, addItem, removeItemFromCheckOut, removeFromCart }) => {
  return (
    <div className="checkout_item">
      <img className="item_info" src={cartItem.imageUrl} alt={cartItem.name} />
      <span className="item_info">{cartItem.name} </span>
      <div className="item_info">
        <span
          className="decrease"
          // onClick={() => {
          //   removeItemFromCheckOut(cartItem);
          // }}
        >
          &#10094;{" "}
        </span>

        {cartItem.counter}

        <span
          className="increase"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          {" "}
          &#10095;
        </span>
      </div>
      <span className="item_info">${cartItem.price}</span>
      <span
        className="item_info"
        onClick={() => {
          removeFromCart(cartItem);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
