import { useState } from "react";
import { CounterChild } from "./CounterChild";

export function CounterParent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <CounterChild count={count} onIncrement={increment} />
    </div>
  );
}
