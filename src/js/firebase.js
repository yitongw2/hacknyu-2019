// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCCGrSjWVuB5GqGLfgkfA2uQT1EjX1Sjgc",
    authDomain: "hacknyu-3e0c8.firebaseapp.com",
    databaseURL: "https://hacknyu-3e0c8.firebaseio.com",
    projectId: "hacknyu-3e0c8",
    storageBucket: "hacknyu-3e0c8.appspot.com",
    messagingSenderId: "482443126384"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;