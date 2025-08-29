import {useState} from "react";

function Count() {
  const [count, setCount] = useState<number>(0)
  const [number, setNumber] = useState<number>(1)

  function increment() {
    setCount(count + number)
  }

  function decrement() {
    setCount(count - number)
  }

  function reset() {
    setCount(0)
  }

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(Number(e.target.value))
  }

  return (
    <div>
      Count: {count}

      <input type="number" value={number} onChange={inputChange}/>

      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Count