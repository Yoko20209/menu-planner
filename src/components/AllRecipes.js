import React, {useState, useEffect} from "react";

function AllRecipes({recipes, setCurrentView, setSingleRecipeView}) { 
    const [AllRecipes, setAllRecipes] = useState([]);

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
            );
        }
        setAllRecipes(newAllRecipes);
    },[recipes]) 
  
    return (
      <div className="AllRecipes">
          AllRecipes<br></br>
        {AllRecipes}
      </div>
    );
}
  
export default AllRecipes;