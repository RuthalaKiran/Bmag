import { useState, useEffect } from "react";

const CountDownTimer = () => {
  const launchDate = new Date("2025-02-27T10:35:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>
      <h1>🚀 Website Launch In:</h1>
      <h2>
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </h2>
    </div>
  );
};

export default CountDownTimer;



