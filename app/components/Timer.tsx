import MotionNumber from "motion-number";
import { ComponentProps, useEffect, useState } from "react";



const format: ComponentProps<typeof MotionNumber>["format"] = {
    minimumIntegerDigits: 2,
}
export function Timer(){
    const [seconds, setSeconds] = useState(0); 
    const [minutes, setMinutes] = useState(59);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev+1);
            if(seconds === 59){
                setSeconds(0);
                setMinutes((prev) => prev+1);
            }
            if(minutes === 60){
               setMinutes(0);
               setHours((prev) => prev+1);
            }
        }, 1000);
        return () => clearInterval(interval);
    },[minutes, seconds]);
    return (
        <div className="font-mono text-2xl flex">
            <MotionNumber value={hours} format = {format} />
            <div>:</div>
            <MotionNumber value = {minutes} format = {format} />
            <div>:</div>
            <MotionNumber value= {seconds} format = {format}/>
            
        </div>
    )
}