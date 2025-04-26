import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/User.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

export default function UserProfile() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push("/auth");
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <Layout>
      <div className={styles.profileContainer}>
        <div className={styles.avatar}>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="John Doe"
            className={styles.avatarImage}
          />
        </div>

        <div className={styles.userInfo}>
          <h2 className={styles.userName}>John Doe</h2>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Empresa:</span>
              <span className={styles.infoValue}>example TM</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email:</span>
              <span className={styles.infoValue}>johndoe@example.com</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Miembro desde:</span>
              <span className={styles.infoValue}>Enero 2024</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Puesto:</span>
              <span className={styles.infoValue}>Analista de Datos</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
