//root reducer is the base reducer object that represents all of the state of our application
//other reducers in our application are going to go through this root reducer

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage

//the persist configuration from the redux-persist library is needed to store the state of the application so that we won't lose it when a user refreshes the page
const persistConfig = {
  key: "root",
  storage,

  //an array containing the string names of reducers we want to store. User reducer is being handled already by firebase authentication, so there is no need to persist it.
  whitelist: ["cart"],
};

//to combine all reducers together
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

//moidified rootReducer with the persist capability(storing the state)
export default persistReducer(persistConfig, rootReducer);
