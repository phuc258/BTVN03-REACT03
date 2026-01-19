import type { CounterChildProps } from "./types";

const buttonStyle: React.CSSProperties = {
  padding: "6px 14px",
  borderRadius: 6,
  border: "1px solid #ccc",
  cursor: "pointer",
};

export function CounterChild({
  count,
  step,
  onIncrement,
  onDecrement,
  onReset,
}: CounterChildProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12 }}>
      <h3>Child: CounterChild</h3>

      <div>
        Count: <b>{count}</b>
      </div>
      <div>
        Step: <b>{step}</b>
      </div>

      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <button style={buttonStyle} onClick={onDecrement}>
          -{step}
        </button>

        <button style={buttonStyle} onClick={onIncrement}>
          +{step}
        </button>

        <button style={buttonStyle} onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
