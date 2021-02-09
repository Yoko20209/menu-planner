import React, {useState, useEffect} from "react";

function SelectedRecipes({selectedRecipes, setSelectedRecipes, setSingleRecipeView, setCurrentView}) { 
  const [selectedRecipesTags, setSelectedRecipesTags] = useState([]);

    useEffect(() => {
      const newArr = [];

      function handleClick(e){
        setCurrentView("SingleRecipe");
        setSingleRecipeView(e.target.innerText);
    };

      //have to use i to make unique keys
      for (let i = 0; i < selectedRecipes.length; i++){
        newArr.push(<article className="each_recipe" key={"selected"+i} onClick={handleClick}>{selectedRecipes[i]}</article>)
      }
      setSelectedRecipesTags(newArr);
    },[]) 
  
    return (
      <div className="SelectedRecipes">SelectedRecipes
        {selectedRecipesTags}
      </div>
    );
}
  
export default SelectedRecipes;