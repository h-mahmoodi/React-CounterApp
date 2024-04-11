import { Log } from "../types";

type LogItemProps = {
  log: Log;
};

export default function LogItem({ log }: LogItemProps) {
  return (
    <li className="log-item">
      <span>{log.id}</span>
      <span>{log.message}</span>
      <span>{log.total}</span>
      <span>{new Date(log.date).toLocaleTimeString()}</span>
    </li>
  );
}
