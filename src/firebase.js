import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8rx7BfnSsl5ygUhejAwY_MvabNZLu7MM",
    authDomain: "robotics-club-nitw.firebaseapp.com",
    projectId: "robotics-club-nitw",
    storageBucket: "robotics-club-nitw.appspot.com",
    messagingSenderId: "16961873586",
    appId: "1:16961873586:web:879c07a4df3068da860bab",
    measurementId: "G-7RHBG6PJ9T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { storage, db, auth };