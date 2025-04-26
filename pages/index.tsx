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
        <p className={styles.subtitle}>Predicción inteligente de ventas</p>
        <button onClick={handleAction} className={styles.ctaButton}>
          {isAuthenticated ? "¿Desea cargar sus datos?" : "¡Regístrate!"}
        </button>
      </div>
    </Layout>
  );
}
