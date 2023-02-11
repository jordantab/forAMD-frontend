// In the CountdownClock.js component
import React, { useState, useEffect } from 'react';
import './CountdownClock.css';

const CountdownClock = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
      
      if (difference < 0) {
        clearInterval(intervalId);
        return;
      }
      
      setTimeRemaining({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown-clock">
      <div className='time-unit'>
        <div className="time-value">{timeRemaining.days}</div>
        <div className="time-label">Days</div>
      </div>
      <div className='time-unit'>
        <div className="time-value">{timeRemaining.hours}</div>
        <div className="time-label">Hours</div>
      </div>
      <div className='time-unit'>
        <div className="time-value">{timeRemaining.minutes}</div>
        <div className="time-label">Minutes</div>
      </div>
      <div className='time-unit'>
        <div className="time-value">{timeRemaining.seconds}</div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownClock;
