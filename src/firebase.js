// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYRgTpWEKJCQqIPmyiH2ITqxkuQ72h50M",
  authDomain: "tinder-8b585.firebaseapp.com",
  databaseURL: "https://tinder-8b585.firebaseio.com",
  projectId: "tinder-8b585",
  storageBucket: "tinder-8b585.appspot.com",
  messagingSenderId: "39436174556",
  appId: "1:39436174556:web:76c319942c90f479c22019",
  measurementId: "G-MYQEMZJ294",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
export default db;
