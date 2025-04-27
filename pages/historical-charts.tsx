import Layout from "../components/Layout";
import styles from "../styles/HistoricalCharts.module.css";
import HistoricalChart from "../components/HistoricalChart";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const historicalData = [
  {
    title: "Q1 2024 Forecast",
    dates: ["Jan", "Feb", "Mar"],
    sales: [200, 220, 240],
  },
  {
    title: "2023 High Session",
    dates: ["Nov", "Dic"],
    sales: [350, 420],
  },
  {
    title: "2024 Promotions",
    dates: ["Apr", "May", "Jun"],
    sales: [180, 210, 240],
  },
];

export default function HistoricalCharts() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push("/auth");
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <Layout>
      <div className={styles.historicalContainer}>
        <h1 className={styles.header}>Prediction History</h1>
        <div className={styles.chartGrid}>
          {historicalData.map((data, index) => (
            <div key={index} className={styles.chartTablePair}>
              {}
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Ventas</th>
                  </tr>
                </thead>
                <tbody>
                  {data.dates.map((date, i) => (
                    <tr key={i}>
                      <td>{date}</td>
                      <td>${data.sales[i].toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {}
              <div className={styles.chartWrapper}>
                <HistoricalChart data={data} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
