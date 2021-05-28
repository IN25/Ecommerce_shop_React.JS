//root reducer is the base reducer object that represents all of the state of our application
//other reducers in our application are going to go through this root reducer

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//to combine all reducers together
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
