import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function Nav() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <h1>SalesPredictorPMN</h1>
      </Link>

      <div className={styles.navLinks}>
        {!isAuthenticated ? (
          <Link href="/auth" className={styles.navLink}>
            LOGIN
          </Link>
        ) : (
          <>
            <Link href="/data-entry" className={styles.navLink}>
              DATA ENTRY
            </Link>
            <Link href="/historical-charts" className={styles.navLink}>
              HISTORICAL CHARTS
            </Link>
            <Link href="/user" className={styles.navLink}>
              JOHN DOE
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
