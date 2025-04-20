import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

export default function DataEntry() {
  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Data Entry</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Ventas Anteriores (CSV o manual)
          </label>
          <textarea
            className={styles.input}
            rows={4}
            defaultValue="fecha,ventas\n2025-04-01,120\n..."
          />
        </div>
        <button className={styles.button}>Enviar datos</button>
      </div>
    </Layout>
  );
}
