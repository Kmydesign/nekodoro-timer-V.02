"use client"
import { useState, useEffect } from 'react';

export default function ComingSoon() {
  // Initialize state for the countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set up an interval to update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days -= 1;
                hours = 23;
                minutes = 59;
                seconds = 59;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card w-96 bg-secondary shadow-xl">
      <div className="card-body items-center text-center">
        <h1 className="card-title">Coming soon</h1>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': timeLeft.days }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': timeLeft.hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': timeLeft.minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': timeLeft.seconds }}></span>
            </span>
            sec
          </div>
        </div>
        <p>Nekodoro timer</p>
      </div>
    </div>
  );
}
