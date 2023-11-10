import React from "react";
import styles from "./header.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <svg
          width="24"
          height="56"
          viewBox="0 0 24 56"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.logo}
        >
          <path d="M0.753912 55.1346L22.5982 54.2927C22.9683 54.2783 23.2671 53.972 23.263 53.6118L23.1947 47.1074C23.1908 46.7476 22.9397 46.2835 22.6374 46.0772L9.67535 37.354C9.37254 37.1472 9.37098 36.9661 9.74024 36.9509L16.303 36.6566C16.303 36.6566 16.7734 36.6665 16.7734 36.3392V34.8252C16.7734 34.5588 16.2744 34.3506 16.2744 34.3506L10.0932 29.6637C9.80287 29.4412 9.87571 29.2582 10.2457 29.2568L22.9931 29.1436C23.3632 29.1397 24 28.7536 24 28.3937V15.2303C24 14.4937 23.7678 14.2753 23.3794 13.9393L20.7857 11.6841C20.209 11.2063 19.324 11.2337 19.324 12.093V18.1094C19.324 18.4187 18.7723 18.5599 18.5123 18.4038L8.09046 11.3147C8.09046 11.3147 3.17411 8.19434 4.22352 5.9274C4.64196 5.02584 5.91086 4.97285 7.67571 6.44587L12.8074 10.4835C13.0993 10.7046 13.373 10.5696 13.373 10.2097V6.45374C13.373 5.95486 13.3384 5.87745 13.1077 5.69515L7.12493 0.863462C5.09156 -0.64737 2.73102 -0.115516 1.29576 1.9901C-0.336169 4.38552 -1.04678 9.75858 2.98168 13.2046L3.02519 13.2983C3.19947 13.4707 3.30745 13.8681 3.30844 14.2281L3.31694 23.4561C3.31751 23.8162 3.00747 24.124 2.63764 24.1272L0.708002 24.1489C0.338879 24.1522 0.0319614 24.4517 0.0299776 24.8118L0.0186418 27.0769C0.0169415 27.4369 0.253435 27.9138 0.544908 28.1357L5.49597 31.9051C5.78758 32.1266 5.72339 32.3076 5.35328 32.3072L0.694965 32.3021C0.325276 32.3016 0.0230347 32.5959 0.0231764 32.9557L0.0265771 36.2484C0.0268605 36.6084 0.279224 37.0659 0.587275 37.2649L2.77169 38.6749C3.07988 38.8741 3.33295 39.3316 3.33394 39.6915L3.36115 48.8312C3.36271 49.1913 3.06061 49.4875 2.69106 49.4896L0.739884 49.4996C0.370053 49.5016 0.0683778 49.7981 0.0697947 50.1578L0.0807057 54.506C0.0812725 54.8661 0.384364 55.149 0.753912 55.1346ZM6.31371 23.4516L6.29557 16.3382C6.29444 15.9783 6.5468 15.8448 6.85584 16.043L12.7027 19.7776C13.0119 19.9751 13.5182 20.2984 13.8274 20.4959L18.7444 23.6359C19.054 23.8338 19.0042 23.9978 18.6342 24.0007L13.9471 24.0414C13.5777 24.0443 12.9727 24.0498 12.6025 24.0526L6.98776 24.1005C6.61737 24.1035 6.31413 23.8115 6.31371 23.4516ZM6.38852 48.8617L6.37081 41.7477C6.37025 41.3882 6.62247 41.2549 6.93151 41.4523L18.82 49.0463C19.129 49.2439 19.0793 49.408 18.7097 49.4113L7.06215 49.5104C6.69247 49.5136 6.38923 49.2216 6.38852 48.8617Z" />
        </svg>
      </div>
      <div>
        <p>Small React Project</p>
      </div>

      {darkMode ? (
        <button onClick={() => setDarkMode(!darkMode)}>Dark</button>
      ) : (
        <button onClick={() => setDarkMode(!darkMode)}>Light</button>
      )}
    </header>
  );
};
