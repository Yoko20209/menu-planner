import { configure } from "@testing-library/react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    // projectId:`${process.env.PROJECT_ID}`,
    authDomain:`${process.env.PROJECT_ID}.firebaseapp.com`,
    projectId: "menu-planner-94dfc",
    // storageBucket: "menu-planner-94dfc.appspot.com",
    // messagingSenderId: "3969965199",
    // appId: "1:3969965199:web:fc14c8b7afebf0685fe4fa",
    // apiKey: process.env.API_KEY,
    // authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
    // databaseURL: `https://${process.env.PROJECT_ID}-default-rtdb.firebaseio.com/`,
    storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,

};

  firebase.initializeApp(firebaseConfig);
//   function initFirebase() {
//       if (!firebase.apps.length){
//         firebase.initializeApp(firebaseConfig);
//       }
//   }
//   initFirebase();
const db = firebase.database();
  export default db;