import "./App.css";

function Counter(props) {
  console.log(props.title);
  return (
    <>
      <h1>{props.title}</h1>
      <button>+</button> {props.initValue}
    </>
  );
}

function App() {
  return (
    <div>
      <Counter title="카운터" initValue="10"></Counter>
    </div>
  );
}

export default App;
