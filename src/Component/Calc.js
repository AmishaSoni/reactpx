import React from 'react'

const Calc = ({num1,num2,type}) => {


  const new_type=type;
   function fun(num1,num2)
   {
    if(new_type==="add")
    return num1+num2;

    else if(new_type==="sub")
    return num1-num2;

    else if(new_type==="multi")
    return num1*num2;

    else
    return num1/num2;
   }
    

  return (
      
    <div>
        {/* <div>{type == "add" ? num1+num2 : type == "sub" ? num1-num2 : type=="div" ? num1/num2 : num1*num2 }</div> */}
         <div>{fun(num1,num2)}</div>
    </div>
  )
}

export default Calc
