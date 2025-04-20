// components/Layout.tsx

import { ReactNode } from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Nav />
    <main className={styles.container}>{children}</main>
  </>
);

export default Layout;
