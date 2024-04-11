import { ChangeEvent } from "react";

type InputProps = {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange }: InputProps) {
  return <input className="input" value={value} onChange={onChange} />;
}
