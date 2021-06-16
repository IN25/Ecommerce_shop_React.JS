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

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};

export const createUserCart = () => {
  return {
    type: CartActionTypes.CREATE_USER_CART,
  };
};

export const setCart = (cartItems) => {
  return {
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems,
  };
};
