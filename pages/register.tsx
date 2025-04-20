import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>Register</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input id="name" type="text" className={styles.input} />
        </div>
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
        <button className={styles.button}>Register</button>
        <p>
          ¿Ya tienes cuenta? <Link href="/login">Login</Link>
        </p>
      </div>
    </Layout>
  );
}
