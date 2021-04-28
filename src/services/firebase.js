import { configure } from "@testing-library/react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain:`${process.env.PROJECT_ID}.firebaseapp.com`,
    projectId: "menu-planner-94dfc",
    storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,

};

  firebase.initializeApp(firebaseConfig);

  const db = firebase.database();
  export default db;