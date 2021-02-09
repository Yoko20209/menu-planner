import React, {useState, useEffect} from "react";
import db from "../services/firebase";

function SingleRecipe({singleRecipeView, selectedRecipes, setSelectedRecipes }) { 
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        db.ref("recipes/" + singleRecipeView).once('value',function(snapshot){
            const recipeData = snapshot.exportVal();

            const recipe = [
                <h2 id="recipe_name" key="recipe_name">{singleRecipeView}</h2>,
                <p key="cook_time">Cook Time: {recipeData["cook time"]} min.</p>,
                <p key="servings">Servings : {recipeData["servings"]} people</p>,<h3 key="ingredients">Ingredients</h3>
            ];

            for(const ingredient in recipeData["ingredients"]){
                recipe.push(<p key={ingredient}>{ingredient}: {recipeData["ingredients"][ingredient]}</p>)
            }

            recipe.push(<h3 key="instructions">Instructions</h3>)
            for(const step in recipeData["instructions"]){
                recipe.push(<p key={step}>{step}: {recipeData["instructions"][step]}</p>)
            }

            setRecipe(recipe);
        });
    },[]) 

    //functions
    function handleSelectRecipe(){
        //TODO need to save it in DB to make it really work
        setSelectedRecipes(selectedRecipes.concat([singleRecipeView]));
    }
  
    return (
      <div className="SingleRecipe">SingleRecipe
      <input type="button" onClick={handleSelectRecipe} value="Save this recipe"></input>
        {recipe}
      </div>
    );
}
  
export default SingleRecipe;