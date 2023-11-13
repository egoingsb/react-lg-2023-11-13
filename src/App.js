import "./App.css";
import s from "./App.module.css";
import { useState, useEffect } from "react";

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const up = () => {
    fetch("http://localhost:9999/counter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: count + step }),
    })
      .then((response) => response.json())
      .then((result) => {
        setCount(result.value);
      });
  };
  const down = () => setCount(count - step);
  const change = (evt) => {
    setStep(Number(evt.target.value));
  };
  const rootStyle = {
    backgroundColor: "#eee",
    padding: 10,
  };
  useEffect(() => {
    fetch("http://localhost:9999/counter")
      .then((response) => response.json())
      .then((result) => {
        setCount(result.value);
      });
  }, []);
  return (
    <div style={rootStyle}>
      <h1>{title}</h1>
      <button className={s.btn + " " + s.border} onClick={up}>
        +
      </button>
      <button className={s.btn} onClick={down}>
        -
      </button>
      <input type="text" value={step} onChange={change}></input>
      <span className="output">{count}</span>
    </div>
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
