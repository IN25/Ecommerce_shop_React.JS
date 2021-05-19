import React from "react";

//withRouter is a higher-order component. A higher-order component is a function that takes a components as an argument and returns a modified component. In this case withRouter allows us to get access to history, match and location props (see tutorial 4 - routing) of a component by passing our component withRouter(MenuItem); at the end
import { withRouter } from "react-router-dom";
import "./menu_item.scss";

const MenuItem = ({ title, imageUrl, size, history, match }) => {
  return (
    <>
      <div
        //in the directory.data.js we added a size property with the 'large' key. If the data has "size" property, it will be with the className of large menu_item
        className={`${size} menu_item`}
        onClick={() => history.push(`${match.url}${title}`)} //  /someMatchedUrl/title
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

export default withRouter(MenuItem);
