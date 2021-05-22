//For Google authentication

import firebase from "firebase/app";
import "firebase/firestore"; //for the database
import "firebase/auth"; //for the authentication

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); //this sets google popup for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
