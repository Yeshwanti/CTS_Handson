import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! Counter Increased");
  };

  const incrementAndHello = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div className="container">

      <h1>React Event Examples</h1>

      <div className="card">

        <h2>Counter : {count}</h2>

        <button onClick={incrementAndHello}>Increment</button>

        <button onClick={decrement}>Decrement</button>

        <button onClick={() => sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <button onClick={onPress}>
          OnPress
        </button>

      </div>

      <CurrencyConvertor />

    </div>
  );
}

export default App;