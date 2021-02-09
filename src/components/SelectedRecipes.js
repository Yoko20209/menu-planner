import React, {useState, useEffect} from "react";
function SelectedRecipes({selectedRecipes, setSelectedRecipes}) { 
  const [selectedRecipesTags, setSelectedRecipesTags] = useState([]);

    useEffect(() => {
      const newArr = [];

      //have to use i to make unique keys
      for (let i = 0; i < selectedRecipes.length; i++){
        newArr.push(<article className="each_recipe" key={"selected"+i}>{selectedRecipes[i]}</article>)
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