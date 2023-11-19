import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./backButton.module.css";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.backButton} onClick={() => navigate("/")}>
      <span>{"<<< "}</span> Back to Home
    </button>
  );
};
