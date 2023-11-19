import React, { useEffect, useState } from "react";
import styles from "./liveClock.module.css";

export const LiveClock = () => {
  const [timer, setTimer] = useState("");
  const [day, setDay] = useState("");
  const [dayName, setDayName] = useState("");

  const weekDayArray = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const AddZeroIfNeeded = (val) => {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  };

  const tick = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTimer(
      AddZeroIfNeeded(h) +
        h +
        ":" +
        AddZeroIfNeeded(m) +
        m +
        ":" +
        AddZeroIfNeeded(s) +
        s
    );
  };

  useEffect(() => {
    const date = new Date();
    const day = date.getDate(); //getDate to have the day number
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    setDay(
      AddZeroIfNeeded(day) +
        day +
        " - " +
        AddZeroIfNeeded(month) +
        month +
        " - " +
        year
    );
  }, []);

  useEffect(() => {
    const timerDelay = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerDelay);
    };
  }, []);

  useEffect(() => {
    const dayInWeek = new Date().getDay();
    setDayName(weekDayArray[dayInWeek]);
  }, []);

  return (
    <div className={styles.clock}>
      <div className={styles.date}>
        <p className={styles.day}>{day}</p>
        <p className={styles.day}>{dayName}</p>
      </div>
      <p className={styles.hours}>{timer}</p>
    </div>
  );
};
