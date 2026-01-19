import { useRef, useState } from "react";

export default function UseRef() {
  const countRef = useRef(0);

  const obj = {
    current: 0
  };

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    countRef.current = countRef.current + 1;
    obj.current = obj.current + 1;

    console.log({
      state_count: count + 1,
      ref_count: countRef.current,
      obj_count: obj.current
    });
  };

  return (
    <button onClick={handleClick}>
      Click button
    </button>
  );
}
