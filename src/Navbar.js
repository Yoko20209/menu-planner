import firebase from "./sevices/firebase";
import React, {useState, useEffect} from "react";

function Navbar() { 
    useEffect(() => {
    },[]) 
  
    return (
      <div className="Navbar">
        <input type='button' value="Selected Recipes"/>
        <input type='button' value="Make New Recipe"/>
        <input type='button' value="Home"/>
      </div>
    );
}
  
export default Navbar;