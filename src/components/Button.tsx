import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: "inc" | "dec" | "reset";
};

export default function Button({
  type,
  onClick,
  disabled,
  children,
}: ButtonProps) {
  const buttonClass = ["button"];
  if (type === "inc") {
    buttonClass.push("button-inc");
  }
  if (type === "dec") {
    buttonClass.push("button-dec");
  }
  if (type === "reset") {
    buttonClass.push("button-reset");
  }
  return (
    <button
      className={buttonClass.join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
