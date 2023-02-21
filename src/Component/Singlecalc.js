import React from 'react'
import { useState } from 'react';

export const Singlecalc = () => {


    // const [num,setNum]=useState(0);
    
    const insertNumber = (e,idx) =>{
      var inputField = document.getElementById("input");
      inputField.value = inputField.value*10+idx*1
    }

    const calcNums = () =>{
      
    }


  return (
    <div>
        <input type="text" placeholder="Lets Calculate"  id="input" value={0}></input>
          <div>
            <button onClick={(e) => insertNumber(e,"9")}>9</button>
            <button onClick={(e) => insertNumber(e,"8")}>8</button>
            <button onClick={(e) => insertNumber(e,"7")}>7</button>
          </div>
          <div>
            <button onClick={(e) => insertNumber(e,"6")}>6</button>
            <button onClick={(e) => insertNumber(e,"5")}>5</button>
            <button onClick={(e) => insertNumber(e,"4")}>4</button>
          </div>
          <div>
            <button onClick={(e) => insertNumber(e,"3")}>3</button>
            <button onClick={(e) => insertNumber(e,"2")}>2</button>
            <button onClick={(e) => insertNumber(e,"1")}>1</button>
          </div>
          <div>
            <button onClick={(e) => calcNums(e)}  >+</button>
            <button onClick={(e) => calcNums(e)} >-</button>
            <button onClick={(e) => calcNums(e)} >0</button>
            <button onClick={(e) => calcNums(e)} >/</button>
            <button onClick={(e) => calcNums(e)} >*</button>
          </div>
          {/* <button onClick={eval(num)}>=</button> */}
    </div>
    
  
  )
}
export default Singlecalc
