import { createSelector } from "reselect";

//input selector - takes the whole state and returns just a slice of it
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedCounter, cartItem) => {
      return (accumulatedCounter += cartItem.counter);
    }, 0)
);