import "./App.css";
import { useState } from "react";

interface ButtonProps {
  clicked: boolean;
}

export function Button({ clicked }: ButtonProps) {
  const [isClicked, setClicked] = useState(clicked);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const text = isClicked ? "Clicked" : "Not clicked";
  const className = isClicked ? "button-red" : "button-black";

  return (
    <button className={className} onClick={handleClick} type="button">
      {text}
    </button>
  );
}
