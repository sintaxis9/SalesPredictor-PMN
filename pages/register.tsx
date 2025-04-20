import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <Layout>
      <h2>Register (Maqueta)</h2>
      <form>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" className={styles.input} />
        </div>
        <button type="submit" className={`${styles.button} button-secondary`}>
          Register
        </button>
      </form>
      <p>
        ¿Ya tienes cuenta? <Link href="/login">Login</Link>
      </p>
    </Layout>
  );
}
