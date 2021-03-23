import firebase from "../services/firebase";
import React, {useState, useEffect, useCallback} from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Navbar2(){
    
const [number, setNumber] = useState();


   const makeArray = useCallback(
      (num) => {
        return [num, num, num];
      },
      [number]
    );
    
const numberArr = makeArray(number);
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