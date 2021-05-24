import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../assets/firebase/firebase.utils"; //for sign out

//ReactComponent as Logo is a special syntax for importing svg
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

export const Header = ({ currentUser }) => {
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

        {/* passing "curentUser" form App.js to let the header know whether the user signed in or not for condiitonal rendering */}
        {currentUser ? (
          // auth.signOut() signs out a user from firebase
          <Link onClick={() => auth.signOut()} to="">
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
