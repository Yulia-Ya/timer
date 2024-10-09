
import { useState } from "react";
import { Button } from "../Button";

export const Timer = () => {
    const [startTimeInterval, setStartTimeInterval] = useState<number | null>(null)
    const [passedTimeInterval, setPassedTimeInterval] = useState<number>(0)
    const [isActive, setIsActive] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<number | undefined>(undefined);




  
const startTimerHandler =()=>{

}
const stopTimerHandler =()=>{
    
}
const resetTimerHandler =()=>{
    
}
  return (
    <div>
      <h2>
       
      </h2>
      <Button title="Start" onClick={startTimerHandler} />
      <Button title="Stop" onClick={stopTimerHandler} />
      <Button title="Reset" onClick={resetTimerHandler} />
    </div>
  );
};
