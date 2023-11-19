import React from "react";
import styles from "./presentation.module.css";

export const Presentation = ({
  title,
  titleColor,
  titleItalic,
  text,
  children,
}) => {
  return (
    <div className={styles.presentation}>
      <h1 className={styles.title}>
        {title} <span>{titleColor}</span> <i>{titleItalic}</i>
      </h1>
      <p className={styles.text}>{text}</p>
      <div className={styles.return}>{children}</div>
    </div>
  );
};
