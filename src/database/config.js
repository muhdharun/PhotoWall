// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref} from 'firebase/database'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd30UbH2-9Uyjw-_DyKmR5bBWBP2swVko",
  authDomain: "photowall-e6b13.firebaseapp.com",
  databaseURL: "https://photowall-e6b13-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "photowall-e6b13",
  storageBucket: "photowall-e6b13.appspot.com",
  messagingSenderId: "705145785399",
  appId: "1:705145785399:web:0745fb125022090226c3b2",
  measurementId: "G-N3JF86YTFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//firebase.initializeApp(firebaseConfig)

const database = getDatabase(app)

export {database,ref}

//export default {database,ref}
//export const database = ref(db)