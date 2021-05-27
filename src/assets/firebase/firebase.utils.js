//Setting up Firebase for Google authentication

import firebase from "firebase/app";
import "firebase/firestore"; //for the database
import "firebase/auth"; //for the authentication

//we need this configuration object to set up firebase to use in our application
const config = {
  apiKey: "AIzaSyBKmhvod_9TzhAZAmw-AoDf0b7jpjsKnvg",
  authDomain: "ecommerce-shop-6b17d.firebaseapp.com",
  projectId: "ecommerce-shop-6b17d",
  storageBucket: "ecommerce-shop-6b17d.appspot.com",
  messagingSenderId: "951096097073",
  appId: "1:951096097073:web:d62bfcc9641585e8abd810",
  measurementId: "G-8GRW07NLW7",
};
firebase.initializeApp(config);

//this function allows us to take an object of the authenticated user that we get from the auth library and store its' properties inside the Firestore databa se
//user is the object of the authenticated user that we get from the auth library
export const createUserProfileDocument = async (userAuth, additionalData) => {

  //if a user is not authenticated, return form this function
  if (!userAuth) return;

  // Firestore library gives us back one of two objects - QueryReference or QuerySnapshot.

  // Query is a request we make to firestore to give us something from the database. And what we get back after we made a query is QueryReference object.

  // QueryReference object is an object that represents the current place in the database that we are querying
  // We get them by calling either:
  // firestore.doc(‘/users/:userId’);
  // firestore.collections(‘/users’);

  // console.log(firestore.doc("users/asdasd")); //making query to Firestore doc
  //Even though this doc does not exist inside our database, QueryReference will always return it, because we use QueryReference object to tell Firestore whether to save the data to Firestore or get data from Firestore.
  // QueryReference does not have the actual data related to the document, but just properties like path, id etc.

  // We use documentRef objects to perform our CRUD methods (create,
  //   retrieve, update, delete). The documentRef methods are .set(), .get(),
  //   .update() and .delete() respectively.

  // We get the snapshotObject from the referenceObject using the .get()
  // method. ie. documentRef.get() or collectionRef.get()
  const userRef = firestore.doc(`users/${userAuth.uid}`); //QueryReference for the current user
  //in the snapShot object, there is property exists, which tells us whether or not we already stored a user in the Firestore database
  const snapShot = await userRef.get(); //snapshotObject

  //if a user does not exist in our database, we are going to create a piece of data, and in order to create, we are going to use DocumentRef methods
  if (!snapShot.exists) {
    //properties to store
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //a property to store the time when we made the document

    try {
      //using documentRef .set() method to create document
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creaing user", error.message);
    }
  }

  //we might want userRef object to use it for something else
  return userRef;
};

//configurations for google authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //this sets google popup for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
