import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import { auth } from "../../assets/firebase/firebase.utils"; //for sign out
//ReactComponent as Logo is a special syntax for importing svg
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart_icon/cart_icon.component.jsx";
import CartDropdown from "../cart_dropdown/cart_dropdown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/shop">CONTACT</OptionLink>

        {/* passing "curentUser" form App.js to let the header know whether the user signed in or not for condiitonal rendering */}
        {currentUser ? (
          // auth.signOut() signs out a user from firebase
          <OptionLink onClick={() => auth.signOut()} to="">
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        <CartIcon></CartIcon>
      </OptionsContainer>

      {hidden ? "" : <CartDropdown></CartDropdown>}
    </HeaderContainer>
  );
};

// getting current user from the redux
//we want to pass currentUser to Header from userReducer
const mapStateToProps = (state) => {
  //currentUser is the value we want to pass as props and state.user.currentUser is the state value from root_reducer
  return { currentUser: state.user.currentUser, hidden: state.cart.hidden };
};

//by using connect(mapStateToProps), then mapStateToProps get access to the root_reducer, where all states are stored. Then we access user.currentUser state
export default connect(mapStateToProps)(Header);
