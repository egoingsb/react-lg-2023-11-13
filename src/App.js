import "./App.css";

function Counter({ title, initValue }) {
  return (
    <>
      <h1>{title}</h1>
      <button>+</button> {initValue}
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
