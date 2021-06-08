import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import { UserActionTypes } from "./user.types";

import {
  auth, //we add auth to our application so that we can use it to let our application know that someone is authenticated using google
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../assets/firebase/firebase.utils";

import {
  emailSignInFailure,
  googleSignInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from "./user.actions";

function* getSnapShotFromUserAuth(userAuth, additionalData) {
  const userRef = yield call(
    createUserProfileDocument,
    userAuth,
    additionalData
  ); //calling createUserProfileDocument(user), createUserProfileDocument returns userRef, and we will use userRef below for getting a snapshot

  //we use onSnapshot to check if our database had updated with any new data
  // We get a documentSnapshot object from a documentReference object.
  // The documentSnapshot object allows to check if a document exists at this query using the .exists property which returns a boolean.
  // We can also get the actual data of a user on the object by calling the .data() method, which returns us a JSON object with user data.
  const userSnapshot = yield userRef.get(); //get() gets the snapshot

  //put() function puts things back into Redux flow
  yield put(
    signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data() /*spreading the data of a user*/,
    })
  );
}

export function* onGoogleSignInStart() {
  //takeLatest listens to the action
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider); //destructuring user object from userRef
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// by passing signInWithEmail into the takeLatest, we get an entire EMAIL_SIGN_IN_START actionChannel, and we want to destructure payload values from it.
//destructure email, password that have been passed as an object via emailSignInStart function
export function* signInWithEmail(props) {
  const {
    payload: { email, password },
  } = props;

  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return; //if userAuth is null return
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signOut() {
  try {
    auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

//exporting all the userSasgas we wrote in this file to pass into root_saga.js
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
  ]);
}
