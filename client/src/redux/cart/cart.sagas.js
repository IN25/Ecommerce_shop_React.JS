import { takeLatest, all, call, put, select } from "@redux-saga/core/effects";
import { CartActionTypes } from "./cart.types";
import { getUserCartRef } from "../../assets/firebase/firebase.utils";

import { UserActionTypes } from "../user/user.types";
import { setCart } from "./cart.actions";
import { selectCurrentUser } from "../user/user.selectors";
import { selectCartItems } from "./cart.selectors";

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, setCartFromFirebase);
}

export function* setCartFromFirebase({ payload: user }) {
  const cartsRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartsRef.get();
  yield put(setCart(cartSnapshot.data().cartItems));
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_FROM_CART,
      CartActionTypes.DECREASE_ITEM,
    ],
    updateCartInFirebase
  );
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  const cartItems = yield select(selectCartItems);

  if (currentUser) {
    try {
      const cartsRef = yield getUserCartRef(currentUser.id);
      yield cartsRef.update({ cartItems: cartItems });
    } catch (error) {
      console.log("Error updating cart in firebase: ", error);
    }
  }
}

export function* cartSagas() {
  yield all([call(onUserSignIn), call(onCartChange)]);
}
