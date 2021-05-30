import React from "react";
import "./cart_item.scss";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cart_item">
      <img src={cartItem.imageUrl} alt={cartItem.name} />

      <div className="product_info">
        {cartItem.name}

        <span>
          {cartItem.counter} X ${cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
