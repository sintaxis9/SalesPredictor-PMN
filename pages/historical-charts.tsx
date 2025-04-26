import Layout from "../components/Layout";
import styles from "../styles/HistoricalCharts.module.css";
import HistoricalChart from "../components/HistoricalChart";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const historicalData = [
  {
    title: "Predicción Q1 2024",
    dates: ["Ene", "Feb", "Mar"],
    sales: [200, 220, 240],
  },
  {
    title: "Temporada alta 2023",
    dates: ["Nov", "Dic"],
    sales: [350, 420],
  },
  {
    title: "Promociones 2024",
    dates: ["Abr", "May", "Jun"],
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
        <h1 className={styles.header}>Historial de Predicciones</h1>
        <div className={styles.chartGrid}>
          {historicalData.map((data, index) => (
            <div key={index} className={styles.chartTablePair}>
              {/* Tabla de datos */}
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

              {/* Gráfica */}
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
