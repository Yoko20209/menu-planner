import '../App.css';
import db from "../services/firebase";
import React, {useState, useEffect} from "react";
// import Navbar from './Navbar';
import AllRecipes from './AllRecipes'
import SelectedRecipes from './SelectedRecipes';
import SingleRecipe from './SingleRecipe';
import NewRecipe from './NewRecipe'

import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentView, setCurrentView] = useState("AllRecipes");
  const [singleRecipeView, setSingleRecipeView] = useState("");
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  //functions

  function handleSelectedRecipesButton(){
    setCurrentView("SelectedRecipes")
  }

  useEffect(() => {
    const data = [];
  db.ref("recipes").once('value',function(snapshot){
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      data.push({[childKey]: childData})
    })
    setRecipes(data);
    // console.log(data);
  }) 
  },[])



  return (
    <div className="App">
      {/* <Navbar 
          setCurrentView={setCurrentView}
          selectedRecipes={selectedRecipes}/> */}
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="#home">Menu Planner</Navbar.Brand>

        <Nav className="mr-auto"  onSelect={(key)=>{setCurrentView(key)}}>
          <Nav.Link eventKey="AllRecipes">Home</Nav.Link>
          <Nav.Link eventKey="NewRecipes">Make new recipe</Nav.Link>
        </Nav>  

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> 

        <Button variant="outline-info" onClick={handleSelectedRecipesButton}>
          Selected Recipes <Badge variant="light">{selectedRecipes.length}</Badge>
          <span className="sr-only">selected recipes</span>
        </Button>

      </Navbar>

      {currentView === "AllRecipes" ?
       <AllRecipes 
          recipes={recipes} 
          setCurrentView={setCurrentView} 
          setSingleRecipeView={setSingleRecipeView}/> 
      : currentView === "SingleRecipe" ?
       <SingleRecipe 
          singleRecipeView={singleRecipeView}
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}/> 
      : currentView === "SelectedRecipes" ?
      <SelectedRecipes 
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}
          setSingleRecipeView={setSingleRecipeView}
          setCurrentView={setCurrentView}/>
      : <NewRecipe />}
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
