type CounterProps = {
  count: number;
};

export default function Counter({ count }: CounterProps) {
  return <div className="counter">{count}</div>;
}
