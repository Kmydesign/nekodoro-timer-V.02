"use client"
import { useState, useEffect } from 'react';

export default function ComingSoon() {
  // Set the fixed release date (e.g., July 1, 2024, at 12:00 PM)
  const targetDate = new Date('2024-09-01T12:00:00');

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

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