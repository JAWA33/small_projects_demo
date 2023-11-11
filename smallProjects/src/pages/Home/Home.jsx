import React from "react";
import styles from "./home.module.css";
import { ButtonAccessToProject } from "../../components/ButtonAccessToProject/ButtonAccessToProject";
import { SunIcon, ListBulletIcon, LapTimerIcon } from "@radix-ui/react-icons";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>
          Discover <span>Some Features</span> <i>for your website</i>
        </h1>
        <p className={styles.text}>
          Explore here a few small demonstration projects to showcase what I can
          create for you and your upcoming app.
        </p>
      </div>
      <div>
        <h2>Select a project :</h2>
        <nav className={styles.buttonsGrid}>
          <ul>
            <ButtonAccessToProject
              icon={<ListBulletIcon width="24px" height="24px" />}
              text="Todo List"
              link="/clock"
            />
            <ButtonAccessToProject
              icon={<LapTimerIcon width="24px" height="24px" />}
              text="Digital Clock"
              link="/clock"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};
