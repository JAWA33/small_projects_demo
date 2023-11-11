import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./buttonAccessToProject.module.css";

export const ButtonAccessToProject = ({ text, link, icon, colorVariation }) => {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(link)} className={styles.element}>
      <icon>{icon}</icon>
      {text}
      <span />
      <span />
      <span />
      <span />
    </li>
  );
};
