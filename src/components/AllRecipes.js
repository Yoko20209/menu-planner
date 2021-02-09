import React, {useState, useEffect} from "react";

function AllRecipes({recipes, setCurrentView, setSingleRecipeView}) { 
    const [AllRecipes, setAllRecipes] = useState([]);

    //functions
    function handleClick(e){
        setCurrentView("SingleRecipe");
        setSingleRecipeView(e.target.innerText);
    };


    useEffect(() => {
        const newAllRecipes = [];
        for (const recipe of recipes){
            const name = Object.keys(recipe);
            newAllRecipes.push(
                <article className="each_recipe" onClick={handleClick} key={name}>{name}</article>
            // <a href="#" class="all_recipe_names" onClick={handleClick}>{name}</a>
            );
        }
        setAllRecipes(newAllRecipes);
    },[recipes]) 
  
    return (
      <div className="AllRecipes">AllRecipes
        {AllRecipes}
      </div>
    );
}
  
export default AllRecipes;