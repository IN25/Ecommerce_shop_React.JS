import React from "react";
import "./App.css";
import { HomePage } from "./pages/home_page/homepage.component.jsx";
import ShopPage from "./pages/shop_page/shop.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import { SignInAndSignUpPage } from "./pages/sign_in_and_sign_up_page/sign_in_and_sign_up_page.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import CheckOutPage from "./pages/checkout_page/checkoutpage.component";

//we add auth to our application so that we can use it to let our application know that someone is authenticated using google
import {
  auth,
  createUserProfileDocument,
} from "./assets/firebase/firebase.utils";

class App extends React.Component {
  //new method
  unsubscribeFromAuth = null;

  //this runs after the application is mounted(rendered)
  componentDidMount() {
    const { setCurrentUser } = this.props;

    //this is an open subscription - Whenever a user signed in or signed out, the onAuthStateChanged method will give us a user, which we will add to our this.state/to our database
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //Storing the user data in the "state" of the application so that we can use it in our app.
      //if userAuth is a true value (exists)
      if (userAuth) {
        //createUserProfileDocument returns userRef, and we will use userRef below
        const userRef = await createUserProfileDocument(userAuth);

        //we use onSnapshot to check if our database had updated with any new data

        // We get a documentSnapshot object from our documentReference object.
        // The documentSnapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean.
        // We can also get the actual data of a user on the object by calling the .data() method, which returns us a JSON object with user data.
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(), //spreading the data of a user
          });
        });
      } else {
        //if a userAuth object does not exist, we set the state to null
        setCurrentUser(userAuth);
      }
    });
  }

  //to prevent memory leak, we call unsubscribeFromAuth() to close the subscription when our application unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
          <Route exact path="/checkout" component={CheckOutPage}></Route>
        </Switch>
      </div>
    );
  }
}

//passing currentUser into the App props
const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

//sending the setCurrentUser function from user.action.js to the App props
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      return dispatch(setCurrentUser(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
