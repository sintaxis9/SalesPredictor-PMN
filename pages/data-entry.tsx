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
        <h2>Carga de datos predictivos</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Datos históricos (CSV o manual)
          </label>
          <textarea
            className={styles.input}
            rows={6}
            placeholder="Ejemplo:\nfecha,ventas\n2025-04-01,120\n2025-04-02,150"
          />
        </div>
        <button
          className={styles.button}
          onClick={handlePredict}
          disabled={isLoading}
        >
          {isLoading ? "Procesando..." : "Generar predicción"}
        </button>
      </div>
    </Layout>
  );
}
