import React from 'react'
import { useState } from 'react';

export const Singlecalc = () => {

const [num,setNum]=useState('')
   
function operation()
{
 var output=eval(num);
 setNum(output);
}


  return (
    <div>
        <input type="text" placeholder="Lets Calculate"  id="input" value={num}></input>
          <div>
            <button onClick={()=>setNum(prev=>prev+'9')}>9</button>
            <button onClick={()=>setNum(prev=>prev+'8')}>8</button>
            <button onClick={()=>setNum(prev=>prev+'7')}>7</button>
            <button onClick={()=>setNum(prev=>prev+'6')}>6</button>
          </div>
          <div>
            
            <button onClick={()=>setNum(prev=>prev+'5')}>5</button>
            <button onClick={()=>setNum(prev=>prev+'4')}>4</button>
            <button onClick={()=>setNum(prev=>prev+'3')}>3</button>
            <button onClick={()=>setNum(prev=>prev+'2')}>2</button>
          </div>
          <div>
            
            <button onClick={()=>setNum(prev=>prev+'1')}>1</button>
            <button onClick={()=>setNum(prev=>prev+'0')} >0</button>
          </div>
          <div>
            <button onClick={()=>setNum(prev=>prev+'+')}  >+</button>
            <button onClick={()=>setNum(prev=>prev+'-')} >-</button>
            <button onClick={()=>setNum(prev=>prev+'/')} >/</button>
            <button onClick={()=>setNum(prev=>prev+'*')} >*</button>
          </div>

          <button onClick={operation}>=</button>
          <button onClick={()=>setNum('')}>Clear</button>
    </div>
    
  
  )
}
export default Singlecalc
