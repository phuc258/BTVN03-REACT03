import React, { useState, useDebugValue } from "react";

const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  useDebugValue(`Counter: ${count}`);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

const UseDebugValuePage: React.FC = () => {
  const counter1 = useCounter(0);

  return (
    <div className="container min-h-screen p-6 mx-auto bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-2 text-4xl font-bold text-gray-800">
          useDebugValue Hook
        </h1>

        <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-blue-600">
            Counter 1 (Bắt đầu từ 0)
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={counter1.decrement}
              className="px-6 py-2 font-bold text-white transition bg-red-500 rounded-lg hover:bg-red-600"
            >
              -
            </button>
            <div className="text-5xl font-bold text-center text-gray-800 min-w-32">
              {counter1.count}
            </div>
            <button
              onClick={counter1.increment}
              className="px-6 py-2 font-bold text-white transition bg-green-500 rounded-lg hover:bg-green-600"
            >
              +
            </button>
          </div>
          <button
            onClick={counter1.reset}
            className="px-4 py-2 font-bold text-white transition bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseDebugValuePage;
