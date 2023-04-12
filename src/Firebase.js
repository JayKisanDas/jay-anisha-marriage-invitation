import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqRNTC93Mrcy3Cmi_3OdCcAiMNx-O63HA",
  authDomain: "jay-anisha-marriage-invi-2a9ef.firebaseapp.com",
  projectId: "jay-anisha-marriage-invi-2a9ef",
  storageBucket: "jay-anisha-marriage-invi-2a9ef.appspot.com",
  messagingSenderId: "645495484309",
  appId: "1:645495484309:web:fa8934a718a552ddc2509c",
  measurementId: "G-QNN66W2XDZ",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
