import React from "react";
import "./menu_item.scss";

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <>
      <div
        //in the directory.data.js we added a size property with the 'large' key. If the data has "size" property, it will be with the className of large menu_item
        className={`${size} menu_item`}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
};
