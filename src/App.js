import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShowNumber from "./Components/ShowNumber";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <ShowNumber number={number} />
        <button onClick={randomNumber}> Criar novo número </button>
      </header>
    </div>
  );
}

export default App;
