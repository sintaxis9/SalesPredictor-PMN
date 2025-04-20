import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <h1>SalesPredictorPMN</h1>
      <div className={styles.navLinks}>
        {["login", "register", "data-entry", "output"].map((path) => (
          <Link key={path} href={`/${path}`} className={styles.navLink}>
            {path.replace("-", " ").toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}
