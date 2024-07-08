import { useEffect, useState } from "react";
import { IconClock } from "@tabler/icons-react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const formattedTime = Math.floor(remainingTime / 1000);
  const displayTime =
    formattedTime < 10 ? `00:0${formattedTime}` : `00:${formattedTime}`;
  const timeClass = formattedTime < 10 ? "text-red-500" : "";

  return (
    <>
      <div className="flex gap-2 justify-end">
        <p className={timeClass}>{displayTime}</p>
        <IconClock />
      </div>

      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </>
  );
}
