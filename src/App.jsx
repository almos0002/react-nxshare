import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const remValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Yetroo ni Jadina 0 vanda Muni", Math.random());
    }
  };
  return (
    <>
      <h1>This is React With Vite | Almos Malakar</h1>
      <button>Click me</button>

      {/* React Hooks */}
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={remValue}>Remo Value {counter}</button>

      {/* Tailwind Css and Props */}
    </>
  );
}

export default App;
