import React, { useEffect, lazy, Suspense } from "react";
import { GlobalStyle } from "./global.styles.js";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error_boundary/error_boundary.component.jsx";

//dynamic imports, //lazy lets us to make dynamic imports whenever our application needs to render a component rather than importing it right away. Suspense is a wrapper to make it work.
const HomePage = lazy(() => import("./pages/home_page/homepage.component.jsx"));
const ShopPage = lazy(() => import("./pages/shop_page/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign_in_and_sign_up_page/sign_in_and_sign_up_page.component")
);
const CheckOutPage = lazy(() =>
  import("./pages/checkout_page/checkoutpage.component")
);
const Header = lazy(() => import("./components/header/header.component.jsx"));

const App = ({ checkUserSession, currentUser }) => {
  //runs after the component is renered (similar to the ComponentDidMount() lifecycle method)
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); //we add [checkUserSession] to run the useEffect only when checkUserSession changes, to avoid a loop of re-renders

  return (
    <div className="App">
      <GlobalStyle />
      {/* passing currentUser to conditionally render the sign out button */}
      {/* if the network goes down and any of the dynamically imported components will not load, ErrorBoundary will make sure to throw an error */}
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </ErrorBoundary>
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
