import { useState } from "react";
import type { CounterState } from "./types";
import { CounterChild } from "./CounterChild";
import { Section } from "./Section";

export function UseStatePropsDemo() {
  const [state, setState] = useState<CounterState>({ count: 0, step: 1 });

  const setStep = (step: number) => {
    const safe = Number.isFinite(step) && step > 0 ? step : 1;
    setState((prev) => ({ ...prev, step: safe }));
  };

  const increment = () => {
    setState((prev) => ({ ...prev, count: prev.count + prev.step }));
  };

  const decrement = () => {
    setState((prev) => ({ ...prev, count: prev.count - prev.step }));
  };

  const reset = () => setState({ count: 0, step: 1 });

  return (
    <Section
      title="useState + props"
      description="Parent giữ state bằng useState. Child nhận dữ liệu qua props và báo hành động lên parent qua callback props (data down, actions up)."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="m-0 text-lg font-semibold text-slate-900">
          Parent: UseStatePropsDemo (giữ state)
        </h3>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label
            htmlFor="step-input"
            className="text-sm font-medium text-slate-700"
          >
            Step:
          </label>

          <input
            id="step-input"
            type="number"
            min={1}
            value={state.step}
            onChange={(e) => setStep(Number(e.target.value))}
            placeholder="Enter step value"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 sm:w-44"
          />

          <span className="text-sm text-slate-500">
            (state hiện tại:{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">
              {`{ count: ${state.count}, step: ${state.step} }`}
            </code>
            )
          </span>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Parent là <b className="text-slate-700">single source of truth</b> cho{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">
            count
          </code>{" "}
          và{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">
            step
          </code>
          . Khi gọi{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700">
            setState
          </code>
          , React re-render và UI cập nhật.
        </p>
      </div>

      <CounterChild
        count={state.count}
        step={state.step}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </Section>
  );
}
