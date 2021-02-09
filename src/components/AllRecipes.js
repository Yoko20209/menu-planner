import React, {useState, useEffect} from "react";

function AllRecipes({recipes}) { 
    const [AllRecipes, setAllRecipes] = useState([]);


    useEffect(() => {
        const newAllRecipes = [];
        for (const recipe of recipes){
            const name = Object.keys(recipe)
            newAllRecipes.push(<p>{name}</p>)
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