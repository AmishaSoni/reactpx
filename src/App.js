import logo from './logo.svg';
import './App.css';
import Calc from './Component/Calc';
import Add from './Component/Add';
import Calculator from './Component/Calculator';
import Singlecalc from './Component/Singlecalc';
import { Todolist } from './Component/Todolist';
import { Project1 } from './Component/Project1';
function App() {
  return (
    <div className="App">
      {/* <Calc num1={2} num2={4} type="add"/> */}
      {/* <Calc num1={2} num2={4} type="sub"/>
      <Calc num1={2} num2={4} type="div"/>
      <Calc num1={2} num2={4} type="multi"/>  */}
      {/* <Add />  */}
       {/* <Calculator/> */}
       {/* <Singlecalc /> */}
       {/* <Todolist/> */}
       <Project1/>
    </div>
  );
}

export default App;
