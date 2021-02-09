import firebase from "../services/firebase";
import React, {useState, useEffect} from "react";

function Navbar({setCurrentView}) { 

  //function
  function handleHomeButton(e){
    setCurrentView("AllRecipes");
  };

  function handleSelectedRecipesButton(){
    setCurrentView("SelectedRecipes")
  }

    return (
      <div className="Navbar">
        <input type='button' value="Selected Recipes" onClick={handleSelectedRecipesButton}/>
        <input type='button' value="Make New Recipe"/>
        <input type='button' value="Home" onClick={handleHomeButton}/>
      </div>
    );
}
  
export default Navbar;