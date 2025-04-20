import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

export default function DataEntry() {
  return (
    <Layout>
      <h2>Data Entry (Maqueta)</h2>
      <form>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Ventas Anteriores (CSV o manual)
          </label>
          <textarea
            className={styles.input}
            rows={4}
            defaultValue="fecha,ventas\n2024-01-01,100\n..."
          />
        </div>
        <button type="submit" className={`${styles.button} button-success`}>
          Enviar datos
        </button>
      </form>
    </Layout>
  );
}
