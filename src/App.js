import "./App.css";
import { useState } from "react";

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const up = () => setCount(count + step);
  const down = () => setCount(count - step);
  const change = (evt) => {
    setStep(Number(evt.target.value));
  };
  return (
    <>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
      <input type="text" value={step} onChange={change}></input>
      {count}
    </>
  );
}

function App() {
  return (
    <div>
      <Counter title="카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
