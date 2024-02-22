// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo_A8qp8GN1zvoYuYLVqAh7-wp0h80Yj0",
    authDomain: "gugugalaregistration.firebaseapp.com",
    projectId: "gugugalaregistration",
    storageBucket: "gugugalaregistration.appspot.com",
    messagingSenderId: "92163124051",
    appId: "1:92163124051:web:c19e4f775ccaf622af8fa6",
    measurementId: "G-C8S69RYST7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);
