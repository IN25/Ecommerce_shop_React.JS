//utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, counter: cartItem.counter + 1 };
      } else {
        return cartItem;
      }
    });
  } else {
    return [...cartItems, { ...cartItemToAdd, counter: 1 }];
  }
};

export const removeFromCart = (cartItems, cartItemToRemove) => {
  const filtered = cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToRemove.id;
  });
  return filtered;
};

export const decreaseItem = (cartItems, cartItemToDecrease) => {
  //remove an element from the checkout page if the quantity is 1
  if (cartItemToDecrease.counter === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToDecrease.id;
    });
    //otherwise, just decrease the counter
  } else {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToDecrease.id
        ? { ...cartItem, counter: cartItem.counter - 1 }
        : cartItem;
    });
  }
};

