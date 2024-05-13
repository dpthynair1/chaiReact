import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter === 20) {
      setCounter(20);
    } else {
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
    }
  };
  const handleClickDecrease = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={handleClick}>Add Value</button>
      <br />
      <button onClick={handleClickDecrease}>Decrease value</button>
    </>
  );
}

export default App;
