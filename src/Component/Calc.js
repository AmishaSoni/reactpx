import React from 'react'

const Calc = (props) => {


    
  return (
      
    <div>
        <div>Num1={props.num1} , Num2={props.num2} </div>
        <div>{props.type}===add</div>
        
        type==="add"
        <div>
            {props.num1+props.num2}
        </div>
        
        
        if(props.type=="sub")
        {<div>substraction={props.num1-props.num2}</div>}

        if(props.type=="div")
        {<div>division={props.num1/props.num2}</div>}

        if(props.type=="multi")
        {<div>mltiplication={props.num1*props.num2}</div>}

    </div>
  )
}

export default Calc
