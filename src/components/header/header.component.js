import React from "react";
import { Link } from "react-router-dom";

//ReactComponent as Logo is a special syntax for importing svg
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Link className="logo_container" to="/">
        <Logo className="logo"></Logo>
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
