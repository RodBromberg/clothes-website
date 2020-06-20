import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWX55Jcodz5ea6L_GKezXzU4-Hd4TUc-Y",
  authDomain: "clothing-app-ce79e.firebaseapp.com",
  databaseURL: "https://clothing-app-ce79e.firebaseio.com",
  projectId: "clothing-app-ce79e",
  storageBucket: "clothing-app-ce79e.appspot.com",
  messagingSenderId: "428092523720",
  appId: "1:428092523720:web:9ea0d613c063c6134ed1fd",
  measurementId: "G-YVHQM552FJ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAd = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAd,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
