import React, { useState } from 'react'

export const Calculator = () => {

  const [value, setValue] = useState(0);
  function fun1() {

    var num1 = document.getElementById("id1");
    var num2 = document.getElementById("id2");
    var add = (num1.value * 1 + num2.value * 1) * 1;
    setValue(add);
  }

  const fun2 = () => {
  const num1 = document.getElementById('id1');
  const num2 = document.getElementById('id2');
  var sub = (num1.value*1) - (num2.value*1);
  setValue(sub);
}
function fun3() {
  const num1 = document.getElementById('id1');
  const num2 = document.getElementById('id2');
  var div = (num1.value*1) / (num2.value*1);
  setValue(div);
}
function fun4() {
  const num1 = document.getElementById('id1');
  const num2 = document.getElementById('id2');
  var multi = (num1.value*1) * (num2.value*1);
  setValue(multi);
}






return (
  <div>
    <input placeholder="Enter first value" id='id1' type="text"></input>
    <input placeholder='Enter second value' id="id2" type="text"></input>
    <button onClick={fun1}>Add</button>
    <button onClick={fun2}>Sub</button>
    <button onClick={fun3}>Div</button>
    <button onClick={fun4}>Mult</button>
    <div>{value}</div>
  </div>
)
}
export default Calculator
