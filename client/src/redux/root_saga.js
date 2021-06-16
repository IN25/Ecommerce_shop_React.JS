import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";

import { fetchCollectionsStart } from "./collections/collections.sagas";
import { userSagas } from "./user/user.sagas";

// rootSaga runs all the sagas in the application
export default function* rootSaga() {
  //all takes an array of our all sagas
  //then we pass them into the store.js file to run
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
