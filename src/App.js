import React from "react";
import "./App.css";
import { HomePage } from "./pages/home_page/homepage.component";
import ShopPage from "./pages/shop_page/shop.component";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign_in_and_sign_up_page/sign_in_and_sign_up_page.component";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header></Header>

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

export default App;
