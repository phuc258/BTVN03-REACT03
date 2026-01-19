export type CounterState = {
  count: number;
  step: number;
};

export type CounterChildProps = {
  count: number;
  step: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};
