import {useState} from "react";
import * as React from "react";

function App() {
  const [text, setText] = useState<string>('')

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  return (
    <>
      <input type={"text"} value={text} onChange={onChange}/>
      <p>{text}</p>
    </>
  )
}

export default App