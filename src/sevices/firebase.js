import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA0Lxd84DOcxRIrwPLiTTy9aAxdTSFjXc8",
    authDomain: "menu-planner-94dfc.firebaseapp.com",
    projectId: "menu-planner-94dfc",
    storageBucket: "menu-planner-94dfc.appspot.com",
    messagingSenderId: "3969965199",
    appId: "1:3969965199:web:fc14c8b7afebf0685fe4fa"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;