import React from "react";
import styles from "./footer.module.css";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainWebSite}>
        <span>
          More about me <a href="https://jawa-design.com">Jawa-design.com</a>
        </span>
      </div>
      <div className={styles.socialNetWorks}>
        <a href="https://github.com/JAWA33">
          <GitHubLogoIcon width="30px" height="30px" />
        </a>
        <a href="https://www.linkedin.com/in/julien-armand-342867120/">
          <LinkedInLogoIcon width="30px" height="30px" />
        </a>
      </div>
    </footer>
  );
};
