import React, {useState, useEffect, useCallback} from 'react'; 
import Navbar2 from "./Navbar2"

// function SearchResult(){


//     return(
//         <div>Search Result  
//         </div>
//     )
// }
function SearchResult() {
    const [number, setNumber] = useState();
    const [button, setButton] = useState("false");
  
    const makeArray = useCallback(
      (num) => {
        return [num, num, num];
      },
      [number]
    );
    
    const numberArr = makeArray(number);
  
    return (
      <>
      <div className="Navbar">
               <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber((e.target.value));
          }}
        ></input>
        {numberArr}
      </div>
   
  
        <button
          onClick={() => {
            return setButton("true");
          }}
        >
          true
        </button>
        <button
          onClick={() => {
            return setButton("false");
          }}
        >
          false
        </button>
        {button}
      </>
    );
  }
export default SearchResult;