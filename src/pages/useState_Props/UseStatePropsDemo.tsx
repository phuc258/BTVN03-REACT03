import { useState } from "react";
import { CounterChild } from "./CounterChild";
import type { CounterState } from "./types";

export function UseStatePropsDemo() {
  const [state, setState] = useState<CounterState>({ count: 0, step: 1 });

  const setStep = (step: number) => {
    const safe = Number.isFinite(step) && step > 0 ? step : 1;
    setState((prev) => ({ count: prev.count, step: safe }));
  };

  const increment = () => {
    setState((prev) => ({ count: prev.count + prev.step, step: prev.step }));
  };

  const decrement = () => {
    setState((prev) => ({ count: prev.count - prev.step, step: prev.step }));
  };

  const reset = () => setState({ count: 0, step: 1 });

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 600 }}>
      <h2>Demo: useState + props</h2>

      <div style={{ border: "1px solid #ddd", padding: 12 }}>
        <h3>Parent: UseStatePropsDemo</h3>

        <label>
          Step:{" "}
          <input
            type="number"
            min={1}
            value={state.step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={{ width: 80 }}
          />
        </label>
      </div>

      <CounterChild
        count={state.count}
        step={state.step}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  );
}
