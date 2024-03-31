import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return { counter, increment, decrement };
}
