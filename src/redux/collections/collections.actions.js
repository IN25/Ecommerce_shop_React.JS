import { CollectionsTypes } from "./collections.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../assets/firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: CollectionsTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: CollectionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: CollectionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    // observer/observance firestore based pattern
    // collectionRef.onSnapshot() means whenever the collectionRef updates or is run for the first time, this will send us a snapshot object of our collection
    // collectionRef.onSnapshot(async (snapshot) => {
    //   //we call convertCollectionsSnapshotToMap to add id and routeName to the collections object. We didn't add these properties to Firestore because for example the mobile app does not need a routeName and Firesotre generates the id automatically
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });

    //pronised based pattern
    //collectionRef.get() makes an API cal to fetch data associated with the collectionRef
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
