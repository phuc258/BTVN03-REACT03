export function CounterChild({
  count,
  step,
  onIncrement,
  onDecrement,
  onReset,
}: {
  count: number;
  step: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        Child: CounterChild (nhận props)
      </h3>

      <div className="mt-2 text-sm text-slate-700">
        <div>Count: <b>{count}</b></div>
        <div>Step: <b>{step}</b></div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={onDecrement}
          className="rounded-xl border px-4 py-2 text-slate-700 hover:bg-slate-100"
        >
          -{step}
        </button>

        <button
          onClick={onIncrement}
          className="rounded-xl border px-4 py-2 text-slate-700 hover:bg-slate-100"
        >
          +{step}
        </button>

        <button
          onClick={onReset}
          className="rounded-xl border px-4 py-2 text-red-600 hover:bg-red-50"
        >
          Reset
        </button>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Props là <b>read-only</b>. Child không tự sửa{" "}
        <code className="rounded bg-slate-100 px-1">count</code> /{" "}
        <code className="rounded bg-slate-100 px-1">step</code>; child chỉ gọi
        callback props để parent cập nhật state.
      </p>
    </div>
  );
}
