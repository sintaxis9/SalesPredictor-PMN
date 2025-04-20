import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <Layout>
      <h2>Login (Maqueta)</h2>
      <form>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} />
        </div>
        <button type="submit" className={`${styles.button} button-primary`}>
          Login
        </button>
      </form>
      <p>
        ¿No tienes cuenta? <Link href="/register">Regístrate</Link>
      </p>
    </Layout>
  );
}
