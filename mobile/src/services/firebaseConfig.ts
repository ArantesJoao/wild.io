import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrrJmOzkPyfgq359X625RYOCbpTnPY6nM",
  authDomain: "wild-io.firebaseapp.com",
  projectId: "wild-io",
  storageBucket: "wild-io.appspot.com",
  messagingSenderId: "320424985365",
  appId: "1:320424985365:web:71a74a503d8bc10e841f1c",
  measurementId: "G-2WZ0H1B9TL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const storage = firebase.storage();

export default firebase;
