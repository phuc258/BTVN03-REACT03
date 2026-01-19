export type Step = number;

export type CounterState = {
  count: number;
  step: Step;
};

export type CounterChildProps = {
  count: number;
  step: Step;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};
