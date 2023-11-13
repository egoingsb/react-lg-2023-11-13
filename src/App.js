import "./App.css";
import { useState } from "react";

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  function up() {
    setCount(count + 1);
  }
  function down() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
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
