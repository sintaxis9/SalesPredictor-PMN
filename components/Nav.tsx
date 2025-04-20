// components/Nav.tsx

import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => (
  <nav className={styles.navbar}>
    <div>SalesPredictorPMN</div>
    <div>
      <Link href="/login" className={styles.navLink}>
        Login
      </Link>
      <Link href="/register" className={styles.navLink}>
        Register
      </Link>
      <Link href="/data-entry" className={styles.navLink}>
        Data Entry
      </Link>
      <Link href="/output" className={styles.navLink}>
        Output
      </Link>
    </div>
  </nav>
);

export default Nav;
