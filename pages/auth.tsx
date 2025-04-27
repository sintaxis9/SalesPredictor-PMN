import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push("/");
  };

  return (
    <Layout>
      <div className={styles.formContainer}>
        <h2>{isRegister ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input id="name" type="text" className={styles.input} />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input id="email" type="text" className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input id="password" type="password" className={styles.input} />
          </div>

          <button className={styles.button} type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p>
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className={styles.toggleButton}
          >
            {isRegister ? "Sign in here" : "Register here"}
          </button>
        </p>
      </div>
    </Layout>
  );
}
