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
          console.log("num")
        return [num, num, num];
      },
      [number]
    );

    // const makeArray = (num) => {
    //     console.log("number")
    //     return [num, num, num];
    // }
    
    const numberArr = makeArray(number);
  
    return (
      <>
      {/* <Navbar2 /> */}
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
              console.log("buttonT")
            return setButton("true");
          }}
        >
          true
        </button>
        <button
          onClick={() => {
            console.log("buttonF")
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