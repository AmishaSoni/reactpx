import React from 'react'

const Add = () => {


     function fun()
     {
        var num1=document.getElementById('id1');
        var num2=document.getElementById('id2');
        console.log(num1);
        return num1+num2;
     }
  return (
    <div>
        <input placeholder='Enter first number' type="text" id="id1"/>
        <input placeholder='Enter second number' type="text" id="id2"/>
        <button onClick={fun()}>Add</button>
        <div>{fun()}</div>
    </div>
  )
}

export default Add