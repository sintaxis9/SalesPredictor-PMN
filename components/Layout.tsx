import { ReactNode } from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <main className={styles.container}>{children}</main>
    </>
  );
}
