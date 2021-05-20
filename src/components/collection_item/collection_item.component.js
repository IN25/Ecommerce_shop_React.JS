import React from "react";
import "./collection_item.scss";

export const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <>
      <div className="item">
        <img src={imageUrl} alt="" />

        {/* <button className="btn">Add To Cart</button> */}

        <div className="product_info">
          <span>{name}</span>
          <span>{`\$${price}`}</span>
        </div>
      </div>
    </>
  );
};
