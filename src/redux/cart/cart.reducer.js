import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden, //we do not need a payload here because we simply setting hidden to the opposite value - true/falses
      };
    default:
      return state;
  }
};

export default cartReducer;
