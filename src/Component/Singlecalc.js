import React from 'react'
import { useState } from 'react';
import  './Singlecalc.css';
export const Singlecalc = () => {

const [num,setNum]=useState('')
   
function operation()
{
 var output=eval(num);
 setNum(output);
}


  return (
    <>
    <div id="flex-outer">
    <div id="flex-item-outer1">
        <input type="text" placeholder="Lets Calculate"  id="input" value={num} className="flex-item-inner1"></input>
          <div className='flex-item1'>
          <div id="flex-item-inner3">
            <div>
            <button onClick={()=>setNum(ankit=>ankit+'9') }>9</button>
            </div>
            <div>
            <button onClick={()=>setNum(prev=>prev+'8')}>8</button>
            </div>
            <div>
            <button onClick={()=>setNum(prev=>prev+'7')}>7</button>
            </div>
            <div>
            <button onClick={()=>setNum(prev=>prev+'6')}>6</button>
            </div> 
          </div>
          <div id="flex-item-inner4">
            
            <div><button onClick={()=>setNum(prev=>prev+'5')}>5</button></div>
            <div><button onClick={()=>setNum(prev=>prev+'4')}>4</button></div>
            <div><button onClick={()=>setNum(prev=>prev+'3')}>3</button></div>
            <div><button onClick={()=>setNum(prev=>prev+'2')}>2</button></div>
          </div>
          <div id="flex-item-inner5">
            
           <div><button onClick={()=>setNum(prev=>prev+'1')}>1</button></div> 
            <div><button onClick={()=>setNum(prev=>prev+'0')} >0</button></div>
          </div>
          <div id="flex-item-inner6">
            <div><button onClick={()=>setNum(prev=>prev+'+')}  >+</button></div>
            <div><button onClick={()=>setNum(prev=>prev+'-')} >-</button></div>
            <div><button onClick={()=>setNum(prev=>prev+'/')} >/</button></div>
            <div><button onClick={()=>setNum(prev=>prev+'*')} >*</button></div>
          </div>
           <div id="flex-item-inner7">
           <div><button onClick={operation}>=</button></div>
          <div><button onClick={()=>setNum('')}>Clear</button></div>
           </div>
           </div>
          
    </div>
    <div id="flex-item-outer2">
      <div id="flex-item-inner2">My First Project Calculator Created By me...</div>
      </div>
    </div> 
    
  </>
  )
}
export default Singlecalc
