import { ChangeEvent, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Actions from "./components/Actions";
import { type Log } from "./types";
import Logs from "./components/Logs";

function App() {
  const [input, setInput] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [logs, setLogs] = useState<Log[]>([]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(+e.currentTarget.value)) {
      setInput(+e.currentTarget.value);
    }
  };

  const handleUpdateInput = (value: number) => {
    setInput(value);
  };

  const handleIncrease = (): void => {
    setCount((count) => count + input);
    const newLog: Log = {
      id: logs.length + 1,
      message: `+${input}`,
      total: count + input,
      date: Date.now(),
    };
    setLogs((logs) => [...logs, newLog]);
  };

  const handleDecrease = (): void => {
    setCount((count) => count - input);
    const newLog: Log = {
      id: logs.length + 1,
      message: `-${input}`,
      total: count - input,
      date: Date.now(),
    };
    setLogs((logs) => [...logs, newLog]);
  };

  const handleReset = () => {
    setCount(0);
    setInput(0);
    const newLog: Log = {
      id: logs.length + 1,
      message: `Rest`,
      total: 0,
      date: Date.now(),
    };
    setLogs((logs) => [...logs, newLog]);
  };

  return (
    <div className="container">
      <Counter count={count} />
      <Actions
        input={input}
        handleChangeInput={handleChangeInput}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleUpdateInput={handleUpdateInput}
        handleReset={handleReset}
      />
      <Logs logs={logs} setLogs={setLogs} />
    </div>
  );
}

export default App;
