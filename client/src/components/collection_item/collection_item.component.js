import React from "react";
import "./collection_item.scss";
import { CustomButton } from "../custom_button/custom_button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="item">
      <img src={imageUrl} alt="" />

      <div className="product_info">
        <span>{name}</span>
        <span>{`$${price}`}</span>
      </div>

      <div className="custom_button">
        <CustomButton
          onClick={() => addItem(item)}
          inverted
          value={"ADD TO CART"}
        ></CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
