import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className={styles.container}>{children}</main>
    </>
  );
}
