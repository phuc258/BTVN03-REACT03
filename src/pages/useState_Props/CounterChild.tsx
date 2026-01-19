type CounterChildProps = {
  count: number;
  onIncrement: () => void;
};

export function CounterChild({ count, onIncrement }: CounterChildProps) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement} 
      style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
            >+</button>
    </div>
  );
}
