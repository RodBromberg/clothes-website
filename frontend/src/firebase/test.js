import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

function Find() {
  console.log(
    firestore.collection("users").doc("O1vafNKeaTjsRWOzsL6g")
    //   .collection("cartItems")
    //   .doc("jXJN5wrvdBPZ80rYTrbj")
  );
  return null;
}

export default Find;
