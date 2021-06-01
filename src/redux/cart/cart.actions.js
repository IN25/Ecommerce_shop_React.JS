import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: item,
  };
};

export const decreaseItem = (item) => {
  return {
    type: CartActionTypes.DECREASE_ITEM,
    payload: item,
  };
};
