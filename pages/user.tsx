import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/User.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

export default function UserProfile() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push("/auth");
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!isAuthenticated) return null;

  return (
    <Layout>
      <div className={styles.profileContainer}>
        <div className={styles.avatar}>
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="John Doe"
            className={styles.avatarImage}
          />
        </div>

        <div className={styles.userInfo}>
          <h2 className={styles.userName}>John Doe</h2>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Enterprise:</span>
              <span className={styles.infoValue}>example TM</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email:</span>
              <span className={styles.infoValue}>johndoe@example.com</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Member Since:</span>
              <span className={styles.infoValue}>July 2022</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Role:</span>
              <span className={styles.infoValue}>Data Analyst</span>
            </div>
          </div>
        </div>

        <button onClick={handleLogout} className={styles.logoutButton}>
          Log Out
        </button>

        <Link href="/" className={styles.backLink}>
          ← Bach to Home
        </Link>
      </div>
    </Layout>
  );
}
