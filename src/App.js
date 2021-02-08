import logo from './logo.svg';
import './App.css';
import db from "./sevices/firebase";
import React, {useState, useEffect} from "react";
import Navbar from './Navbar';
// const Navbar = require("./components/Navbar")

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  const data = db.ref("recipes").once('value',function(snapshot){
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log("key", childKey, "data", childData);
    })
  })
    // setRecipes(data);
    // console.log(data.child);
  
  },[])



  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
