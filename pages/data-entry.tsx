import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

export default function DataEntry() {
  const router = useRouter();

  const handlePredict = () => {
    router.push("/output");
  };

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
        <button className={styles.button} onClick={handlePredict}>
          Generar predicción
        </button>
      </div>
    </Layout>
  );
}
