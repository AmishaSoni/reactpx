import logo from './logo.svg';
import './App.css';
import Calc from './Component/Calc';
function App() {
  return (
    <div className="App">
      <Calc num1={2} num2={4} type="add"/>
      <Calc num1={2} num2={4} type="sub"/>
      <Calc num1={2} num2={4} type="div"/>
      <Calc num1={2} num2={4} type="multi"/> 
    </div>
  );
}

export default App;
