import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";
import Link from "next/link";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Layout>
      <div
        className={styles.formContainer}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <h2>{isRegister ? "Registro" : "Inicio de sesión"}</h2>

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

        <button className={styles.button}>
          {isRegister ? "Registrarse" : "Iniciar sesión"}
        </button>

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
