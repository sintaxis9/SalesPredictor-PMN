import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleAction = () => {
    router.push(isAuthenticated ? "/data-entry" : "/auth");
  };

  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className={styles.title}>SalesPredictor</h1>
        <p className={styles.subtitle}>Smart Sales Prediction</p>
        <button onClick={handleAction} className={styles.ctaButton}>
          {isAuthenticated ? "Upload Your Data?" : "¡Sign Up Now!"}
        </button>
      </div>
    </Layout>
  );
}
