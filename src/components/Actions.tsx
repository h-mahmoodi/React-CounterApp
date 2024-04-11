import { type ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";

type ActionsProps = {
  input: number;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleUpdateInput: (number: number) => void;
  handleReset: () => void;
};

export default function Actions({
  input,
  handleChangeInput,
  handleIncrease,
  handleDecrease,
  handleUpdateInput,
  handleReset,
}: ActionsProps) {
  return (
    <div>
      <div className="card">
        <Input value={input} onChange={handleChangeInput} />
        <Button type="inc" onClick={handleIncrease} disabled={input === 0}>
          Increase
        </Button>
        <Button type="dec" onClick={handleDecrease} disabled={input === 0}>
          Deccrease
        </Button>
      </div>
      <div className="card">
        <Button onClick={() => handleUpdateInput(0)}>0</Button>
        <Button onClick={() => handleUpdateInput(1)}>1</Button>
        <Button onClick={() => handleUpdateInput(2)}>2</Button>
        <Button onClick={() => handleUpdateInput(5)}>5</Button>
        <Button onClick={() => handleUpdateInput(10)}>10</Button>
        <Button onClick={() => handleUpdateInput(20)}>20</Button>
        <Button onClick={() => handleUpdateInput(50)}>50</Button>
      </div>

      <div className="card">
        <Button type="reset" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
