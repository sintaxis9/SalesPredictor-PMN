import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className={styles.title}>SalesPredictor</h1>
        <p className={styles.subtitle}>Predicción inteligente de ventas</p>
        <Link href="/data-entry" className={styles.ctaButton}>
          ¿Desea cargar sus datos?
        </Link>
      </div>
    </Layout>
  );
}
