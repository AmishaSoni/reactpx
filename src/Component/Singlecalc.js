import React from 'react'
import { useState } from 'react';

export const Singlecalc = () => {


    const [num,setNum]=useState(0);


  return (
    <div>
        <input type="text" placeholder="Lets Calculate"  id="id1"></input>
        <div>
        <button >9</button>
        <button >8</button>
        <button >7</button>
        </div>
        <div>
        <button >6</button>
        <button >5</button>
        <button >4</button>
        </div>
        <div>
        <button >3</button>
        <button >2</button>
        <button >1</button>
        </div>
        <div>
        <button >+</button>
        <button >-</button>
        <button >0</button>
        <button >/</button>
        <button >*</button>
        </div>
        <button onClick={eval(num)}>=</button>
    
    </div>
    
  
  )
}
export default Singlecalc
