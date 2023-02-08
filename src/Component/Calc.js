import React from 'react'

const Calc = ({num1,num2,type}) => {


    var a = 0;
    

  return (
      
    <div>
        <div>{type == "add" ? num1+num2 : type == "sub" ? num1-num2 : type=="div" ? num1/num2 : num1*num2 }</div>
    </div>
  )
}

export default Calc
