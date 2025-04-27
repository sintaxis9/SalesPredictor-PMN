import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";
import Loading from "../components/Loading";

export default function DataEntry() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, router]);

  const handlePredict = () => {
    setIsLoading(true);
    setTimeout(
      () => {
        router.push("/output");
      },
      3500 + Math.random() * 1500,
    );
  };

  if (!isAuthenticated || isLoading) return <Loading />;

  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Upload Data Input</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Historical data (CSV or manual)
          </label>
          <textarea
            className={styles.input}
            rows={6}
            placeholder="Example:\ndate,sales\n2025-04-01,120\n2025-04-02,150"
          />
        </div>
        <button
          className={styles.button}
          onClick={handlePredict}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Generate prediction"}
        </button>
      </div>
    </Layout>
  );
}
