import React from "react";
import "./collection_item.scss";
import { CustomButton } from "../custom_button/custom_button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { checkUserSession } from "../../redux/user/user.actions";

const CollectionItem = ({ item, addItem, checkUserSession }) => {
  const { name, imageUrl, price } = item;
  checkUserSession();

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
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
