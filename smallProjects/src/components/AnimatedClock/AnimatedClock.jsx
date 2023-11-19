import React, { useEffect, useRef, useState } from "react";
import styles from "./animatedClock.module.css";

export const AnimatedClock = ({ children }) => {
  const [hourValue, setHourValue] = useState(new Date().getHours());
  const [minValue, setMinValue] = useState(new Date().getMinutes());
  const [secValue, setSecValue] = useState(new Date().getSeconds());

  const [hourPart, setHourPart] = useState(0);

  const clockContainer = useRef(null);
  const actualMinutes = new Date().getMinutes();

  const updateClock = () => {
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    setSecValue((prevSecValue) => prevSecValue + 1);

    if (hour != hourValue && min === 0 && sec === 0) {
      setHourValue((prevHourValue) => prevHourValue + 1);
    }

    if (min != minValue && sec === 0) {
      setMinValue((prevMinValue) => prevMinValue + 1);
    }
  };

  useEffect(() => {
    const timerDelay = setInterval(() => updateClock(), 1000);

    return () => {
      clearInterval(timerDelay);
    };
  }, []);

  return (
    <div className={styles.animatedContainer} ref={clockContainer}>
      {children}
      <svg
        height="550"
        width="550"
        style={{ rotate: 270 + 6 * secValue + "deg" }}
      >
        <circle cx="50%" cy="50%" fill="transparent" />
      </svg>
      <div
        className={styles.wrapper}
        style={{ rotate: 30 * hourValue + 0.5 * actualMinutes + "deg" }}
      >
        <span className={styles.hour}></span>
      </div>
      <div className={styles.wrapper} style={{ rotate: 6 * minValue + "deg" }}>
        <span className={styles.min}></span>
      </div>
    </div>
  );
};
