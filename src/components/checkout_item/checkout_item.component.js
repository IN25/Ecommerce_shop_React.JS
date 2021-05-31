import React from "react";
import "./checkout_item.scss";

export const CheckOutItem = ({ cartItem }) => {
  return (
    <div className="checkout_item">
      <img className="item_info" src={cartItem.imageUrl} alt="" />
      <span className="item_info">{cartItem.name} </span>
      <span className="item_info">{cartItem.counter}</span>
      <span className="item_info">${cartItem.price}</span>
      <span className="item_info">X</span>
    </div>
  );
};
