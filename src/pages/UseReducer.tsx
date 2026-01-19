import { useReducer } from "react";

type Action = { type: "Tang" } | { type: "Giam" } | { type: "RESET" };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "Tang":
      return state + 1;
    case "Giam":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-xl shadow-md bg-white flex flex-col items-center gap-4">
      <p className="text-3xl font-semibold text-gray-800">Count: {count}</p>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: "Tang" })}
          className="px-4 py-2 rounded-lg font-medium text-white bg-green-500 hover:bg-green-600 transition"
        >
          Tăng
        </button>
        <button
          onClick={() => dispatch({ type: "Giam" })}
          className="px-4 py-2 rounded-lg font-medium text-white bg-red-500 hover:bg-red-600 transition"
        >
          Giảm
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="px-4 py-2 rounded-lg font-medium text-white bg-gray-600 hover:bg-gray-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
