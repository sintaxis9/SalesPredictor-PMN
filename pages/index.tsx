import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleAction = () => {
    router.push(isAuthenticated ? "/data-entry" : "/auth");
  };

  return (
    <Layout>
      {}
      <div className={styles.hero}>
        <h1 className={styles.title}>SalesPredictor</h1>
        <p className={styles.subtitle}>AI-Powered Sales Forecasting</p>
        <button onClick={handleAction} className={styles.ctaButton}>
          {isAuthenticated ? "Upload Your Data" : "Get Started!"}
        </button>
      </div>

      {}
      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/growth.jpg"
              alt="Technology stack"
              width={600}
              height={400}
              className={styles.sectionImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <p className={styles.sectionText}>
              We combine cutting-edge TensorFlow models with Pandas-powered data
              analysis to deliver accurate sales predictions. Our platform
              processes historical data, market trends, and real-time inputs
              through deep learning algorithms optimized for business
              forecasting.
            </p>
            <div className={styles.techStack}>
              <span className={styles.techBadge}>TensorFlow 2.0</span>
              <span className={styles.techBadge}>Pandas 1.3</span>
              <span className={styles.techBadge}>Python 3.9</span>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className={`${styles.section} ${styles.darkSection}`}>
        <div className={`${styles.sectionContent} ${styles.reverse}`}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Why Trust Us</h2>
            <p className={styles.sectionText}>
              Our technology powers sales forecasting for industry leaders:
            </p>
            <div className={styles.companiesGrid}>
              <div className={styles.companyLogo}>GlobalTech Inc</div>
              <div className={styles.companyLogo}>RetailMaster Corp</div>
              <div className={styles.companyLogo}>E-Commerce Pro</div>
              <div className={styles.companyLogo}>FinTrade Solutions</div>
            </div>
            <div className={styles.trustMetrics}>
              <div className={styles.metricItem}>
                <h3>98.7%</h3>
                <p>Prediction Accuracy</p>
              </div>
              <div className={styles.metricItem}>
                <h3>24/7</h3>
                <p>Expert Support</p>
              </div>
              <div className={styles.metricItem}>
                <h3>1M+</h3>
                <p>Daily Predictions</p>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/analytics.jpg"
              alt="Client trust"
              width={600}
              height={400}
              className={styles.sectionImage}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
