import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAD4Txd_PFp1Oc3ZtvE0gxDCUcAt4aCofQ",
  authDomain: "attendance-project-8ff9c.firebaseapp.com",
  databaseURL: "https://attendance-project-8ff9c-default-rtdb.firebaseio.com",
  projectId: "attendance-project-8ff9c",
  storageBucket: "attendance-project-8ff9c.appspot.com",
  messagingSenderId: "94501101809",
  appId: "1:94501101809:web:b6348e897db3facb02c950"
};


firebase.initializeApp(firebaseConfig)
export default firebase.database()