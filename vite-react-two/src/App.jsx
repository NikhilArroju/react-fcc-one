import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function addValue() {
    setCount((a) => a + 1);
    setCount((a) => a + 1);
    setCount((a) => a + 1);
  }

  function decreaseValue() {
    setCount((a) => a - 1);
  }
  function multiplyValue() {
    setCount((a) => a * 2);
  }

  return (
    <>
      <h1>react</h1>
      <h2>counter value: {count} </h2>
      <button onClick={addValue}> add value</button>
      <button onClick={decreaseValue}> remove value</button>
      <button onClick={multiplyValue}> multiply value</button>
      <p>footer:{count}</p>
    </>
  );
}

export default App;
