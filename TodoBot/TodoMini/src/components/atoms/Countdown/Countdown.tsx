import { useEffect, useState, useCallback } from "react";

interface CountdownProps {
  className?: string;
  endDate: string | null;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ className, endDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    if (!endDate) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const difference = new Date(endDate).getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    if (endDate) {
      timer = setInterval(() => {
        const next = calculateTimeLeft();
        setTimeLeft(next);

        // если время вышло — очищаем таймер
        if (
          next.days === 0 &&
          next.hours === 0 &&
          next.minutes === 0 &&
          next.seconds === 0
        ) {
          clearInterval(timer);
        }
      }, 1000);
    } else {
      // если даты нет — сразу обнуляем
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [endDate, calculateTimeLeft]);

  if (!endDate) return null;

  const format = (num: number) => String(num).padStart(2, "0");

  return (
      <p className={className}>
        {timeLeft.days}:{format(timeLeft.hours)}:{format(timeLeft.minutes)}:
        {format(timeLeft.seconds)}
      </p>
  );
};

export default Countdown;
