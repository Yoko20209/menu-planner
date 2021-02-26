import firebase from "../services/firebase";
import React, {useState, useEffect, useCallback} from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Navbar2(){
    
const [number, setNumber] = useState();
const [button, setButton] = useState("false");

// const makeArray = (num) => {
//     console.log("number")
//     return [num, num, num];
// }

   const makeArray = useCallback(
      (num) => {
          console.log("num")
        return [num, num, num];
      },
      [number]
    );
    
const numberArr = makeArray(number);
  //function
    return (
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
    );
}
  
export default Navbar2;