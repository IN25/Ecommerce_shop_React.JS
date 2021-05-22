import React from "react";
import "./App.css";
import { HomePage } from "./pages/home_page/homepage.component";
import ShopPage from "./pages/shop_page/shop.component";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign_in_and_sign_up_page/sign_in_and_sign_up_page.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAll = null;

  //when application is mounted
  componentDidMount() {
    //this is an open subscription - Whenever a user signed in or signed out, the onAuthStateChanged method will give us a user, which we will add to our state
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  //to prevent memory leak, we call unsubscribeFromAuth() to close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* passing currentUser to conditionally render the sign out button */}
        <Header currentUser={this.state.currentUser}></Header>

        {/* Switch component is imported from the react-router-component, it only renders the first path that it encounters in our code, it is useful to prevent multiple renders if there are components with the same path */}
        <Switch>
          {/* Route component is imported from the react-router-dom, it allows us to render components based on a url path */}
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
