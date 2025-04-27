import { useEffect, useState } from "react";
import styles from "../styles/Loading.module.css";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 25, 100));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.orbit}></div>
        <div className={styles.planet}></div>
      </div>
      <h2 className={styles.title}>Analyzing sales patterns</h2>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className={styles.subtext}>This process may take a few seconds...</p>
    </div>
  );
}
