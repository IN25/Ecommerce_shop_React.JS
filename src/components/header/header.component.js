import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../assets/firebase/firebase.utils"; //for sign out
//ReactComponent as Logo is a special syntax for importing svg
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
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

const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

//connect is a higher-order component, that lets us modify a component by taking a component as an argument and returning a new one
export default connect(mapStateToProps)(Header);
