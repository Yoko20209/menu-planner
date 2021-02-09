// import firebase from "../services/firebase";
// import React, {useState, useEffect} from "react";
// import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';

// function Navbar({setCurrentView, selectedRecipes}) { 

//   //function
//   function handleHomeButton(e){
//     setCurrentView("AllRecipes");
//   };

//   function handleSelectedRecipesButton(){
//     setCurrentView("SelectedRecipes")
//   }

//     return (
//       <div className="Navbar">
//         {/* <input type='button' value="Selected Recipes" onClick={handleSelectedRecipesButton}/> */}
//         <Button variant="primary" onClick={handleHomeButton}>Home</Button>{' '}

//         <Button variant="outline-success" >Make New Recipe</Button>{' '}

//         <Button variant="outline-info" onClick={handleSelectedRecipesButton}>
//           Selected Recipes <Badge variant="light">{selectedRecipes.length}</Badge>
//           <span className="sr-only">selected recipes</span>
//         </Button>
//       </div>
//     );
// }
  
// export default Navbar;