import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <h1>SalesPredictorPMN</h1>
      </Link>
      <div className={styles.navLinks}>
        {["auth", "data-entry", "historical-charts"].map((path) => (
          <Link key={path} href={`/${path}`} className={styles.navLink}>
            {path.replace("-", " ").toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}
