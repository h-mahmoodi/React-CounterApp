import { Log } from "../types";
import Button from "./Button";
import LogItem from "./LogItem";

type LogsProps = {
  logs: Log[];
  setLogs: (logs: Log[]) => void;
};

export default function Logs({ logs, setLogs }: LogsProps) {
  if (logs.length === 0) {
    return <div className="card">No logs yet! Please add a log entry</div>;
  }
  return (
    <div>
      <div className="card">
        <ul className="logs">
          {logs
            .sort((a, b) => b.id - a.id)
            .map((log) => (
              <LogItem log={log} key={log.id} />
            ))}
        </ul>
      </div>
      <Button onClick={() => setLogs([])}>Clear Logs</Button>
    </div>
  );
}
