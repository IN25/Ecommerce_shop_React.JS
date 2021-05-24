import React from "react";
import "./App.css";
import { HomePage } from "./pages/home_page/homepage.component";
import ShopPage from "./pages/shop_page/shop.component";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign_in_and_sign_up_page/sign_in_and_sign_up_page.component";

//we add auth to our application so that we can use it to let our application know that someone is authenticated using google
import { auth, createUserProfileDocument } from "./assets/firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  //new method
  unsubscribeFromAuth = null;

  //this runs after the application is mounted(rendered)
  componentDidMount() {
    //this is an open subscription - Whenever a user signed in or signed out, the onAuthStateChanged method will give us a user, which we will add to our this.state/to our database
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      this.setState({ currentUser: userAuth }); //adding a user object to the state for conditional rendering

      //Storing the user data in the "state" of the application so that we can use it in our app.
      //if userAuth is a true value (exists)
      if (userAuth) {
        createUserProfileDocument(userAuth); //adding a user to Firestore database
        //createUserProfileDocument returns userRef, and we will use userRef below
        const userRef = await createUserProfileDocument(userAuth);

        //we use onSnapshot to check if our database had updated with any new data

        // We get a documentSnapshot object from our documentReference object.
        // The documentSnapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean.
        // We can also get the actual data of a user on the object by calling the .data() method, which returns us a JSON object with user data.
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(), //spreading the data of a user
            },
          });
        });
      } else {
        //if a userAuth object does not exist, we set the state to null
        this.setState({ currentUser: null });
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
