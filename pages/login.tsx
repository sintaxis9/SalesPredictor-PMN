import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input id="password" type="password" className={styles.input} />
        </div>
        <button className={styles.button}>Login</button>
        <p>
          ¿No tienes cuenta? <Link href="/register">Regístrate</Link>
        </p>
      </div>
    </Layout>
  );
}
