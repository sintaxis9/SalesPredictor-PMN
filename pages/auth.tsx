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
        <h2>{isRegister ? "Registro" : "Inicio de sesión"}</h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">
                Nombre
              </label>
              <input id="name" type="text" className={styles.input} />
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input id="email" type="email" className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="password">
              Contraseña
            </label>
            <input id="password" type="password" className={styles.input} />
          </div>

          <button className={styles.button} type="submit">
            {isRegister ? "Registrarse" : "Iniciar sesión"}
          </button>
        </form>

        <p>
          {isRegister ? "¿Ya tienes cuenta? " : "¿No tienes cuenta? "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className={styles.toggleButton}
          >
            {isRegister ? "Inicia sesión aquí" : "Regístrate aquí"}
          </button>
        </p>
      </div>
    </Layout>
  );
}
