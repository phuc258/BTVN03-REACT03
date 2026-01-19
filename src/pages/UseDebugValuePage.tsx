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
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">useDebugValue Hook</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Counter 1 (Bắt đầu từ 0)</h2>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={counter1.decrement}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              -
            </button>
            <div className="text-5xl font-bold text-gray-800 min-w-32 text-center">
              {counter1.count}
            </div>
            <button
              onClick={counter1.increment}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              +
            </button>
          </div>
          <button
            onClick={counter1.reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseDebugValuePage;
