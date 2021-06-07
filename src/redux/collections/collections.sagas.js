import { takeLatest, call, put } from "redux-saga/effects"; //listens for every action
import { CollectionsTypes } from "./collections.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../assets/firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./collections.actions";

//sagas expect generator functions
export function* fetchCollectionsStart() {
  yield takeLatest(
    CollectionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    ); //call is the effect that envokes functions, here we call convertCollectionsSnapshotToMap(snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap)); //put means dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
