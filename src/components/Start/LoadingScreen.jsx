import React from "react";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.h3}>개발자 고민은</h3>
        <h1 className={styles.h1}>DevTalk</h1>
      </div>
    </div>
  );
}
