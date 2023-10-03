'use client'
import { useEffect, useState } from "react";

export default function Timer() {
    const [isMounted, setIsMounted] = useState(false);
    const [variable, setVariable] = useState('Initial Value');
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  
    useEffect(() => {
      setIsMounted(true);
  
      if (!isMounted) return;
  
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
  
      const timeout = setTimeout(() => {
        setVariable('New Value');
      }, 15 * 60 * 1000);
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, [isMounted]);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
    return (
        <>
          {displayTime}
        </>

    );
}