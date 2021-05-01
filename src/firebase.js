import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAYa9IpGl7Z_ezTNmd49o9oKtUVb9IUEg0",
  authDomain: "disney-clone-647fb.firebaseapp.com",
  projectId: "disney-clone-647fb",
  storageBucket: "disney-clone-647fb.appspot.com",
  messagingSenderId: "376343351357",
  appId: "1:376343351357:web:f420ab346461c851d21a54",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//const storage = firebase.storage();

export { auth, db, provider };
export default db;
