import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const items = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
    { href: "/data-entry", label: "Data Entry" },
    { href: "/output", label: "Output" },
  ];
  return (
    <nav className={styles.nav}>
      {items.map((i) => (
        <Link key={i.href} href={i.href} className={styles.link}>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
