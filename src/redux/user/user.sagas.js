import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import { UserActionTypes } from "./user.types";

import {
  auth, //we add auth to our application so that we can use it to let our application know that someone is authenticated using google
  googleProvider,
  createUserProfileDocument,
} from "../../assets/firebase/firebase.utils";

import { googleSignInFailure, googleSignInSuccess } from "./user.actions";

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider); //destructuring user object from userRef
    const userRef = yield call(createUserProfileDocument, user); //calling createUserProfileDocument(user), createUserProfileDocument returns userRef, and we will use userRef below for getting a snapshot

    //we use onSnapshot to check if our database had updated with any new data
    // We get a documentSnapshot object from a documentReference object.
    // The documentSnapshot object allows to check if a document exists at this query using the .exists property which returns a boolean.
    // We can also get the actual data of a user on the object by calling the .data() method, which returns us a JSON object with user data.
    const userSnapshot = yield userRef.get(); //get() gets the snapshot

    //put() function puts things back into Redux flow
    yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data() /*spreading the data of a user*/,
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

//exporting all the userSasgas we wrote in this file to pass into root_saga.js
export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
