import { useState } from "react";
import { Button } from "../Button";
import s from './Timer.module.css'

export const Timer = () => {
  const [startTimeInterval, setStartTimeInterval] = useState<number | null>(null);
  const [passedTimeInterval, setPassedTimeInterval] = useState<number>(0);
  const [timerId, setTimerId] = useState<number | null>(null);


  //logic
  const startTimerHandler = () => {
    const newStartTimeInterval = new Date().getTime() - passedTimeInterval;
    setStartTimeInterval(newStartTimeInterval)

    const time = setInterval(() => {
      const currentTime = new Date().getTime();
      setPassedTimeInterval(currentTime - newStartTimeInterval);
    }, 1000);
    setTimerId(+time);

  };

  const stopTimerHandler = () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const resetTimerHandler = () => {
    if (timerId) {
      clearInterval(timerId);
      }
      setPassedTimeInterval(0)
  };

//convert to human time
  const seconds = Math.floor(passedTimeInterval / 1000);
  const minutes = Math.floor((seconds % 3600) / 60);
  const hours = Math.floor(seconds / 3600);

  const get2digits = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  return (
    <div className={s.timer}>
      <h2>
        {get2digits(hours)} : {get2digits(minutes)} : {get2digits(seconds)}
      </h2>
      <Button title="Start" onClick={startTimerHandler} />
      <Button title="Stop" onClick={stopTimerHandler} />
      <Button title="Reset" onClick={resetTimerHandler} />
    </div>
  );
};
