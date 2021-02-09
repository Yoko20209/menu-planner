import firebase from "../services/firebase";
import React, {useState, useEffect} from "react";

function Navbar({setCurrentView}) { 

  //function
  function handleHomeButton(e){
    setCurrentView("AllRecipes");
  };

    useEffect(() => {
    },[]) 
  
    return (
      <div className="Navbar">
        <input type='button' value="Selected Recipes"/>
        <input type='button' value="Make New Recipe"/>
        <input type='button' value="Home" onClick={handleHomeButton}/>
      </div>
    );
}
  
export default Navbar;