import React, { useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/home_page/homepage.component.jsx";
import ShopPage from "./pages/shop_page/shop.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import { SignInAndSignUpPage } from "./pages/sign_in_and_sign_up_page/sign_in_and_sign_up_page.component";
import { connect } from "react-redux";
import CheckOutPage from "./pages/checkout_page/checkoutpage.component";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  //runs after the component is renered (similar to the ComponentDidMount() lifecycle method)
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); //we add [checkUserSession] to run the useEffect only when checkUserSession changes, to avoid a loop of re-renders

  return (
    <div className="App">
      {/* passing currentUser to conditionally render the sign out button */}
      <Header />

      {/* Switch component is imported from the react-router-component, it only renders the first path that it encounters in our code, it is useful to prevent multiple renders if there are components with the same path */}
      <Switch>
        {/* Route component is imported from the react-router-dom, it allows us to render components based on a url path */}
        {/*match, location and history props are passed automatically with the ShopPage component*/}
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        {/* this will redirect a user to the homepage if he is signed in */}
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
        <Route exact path="/checkout" component={CheckOutPage}></Route>
      </Switch>
    </div>
  );
};

//passing currentUser into the App props
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
