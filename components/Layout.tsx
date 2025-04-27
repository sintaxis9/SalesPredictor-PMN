import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layoutContainer}>
      <Nav />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
}
