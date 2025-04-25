import Layout from "../components/Layout";
import styles from "../styles/Output.module.css";
import HistoricalChart from "../components/HistoricalChart";

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
];

export default function HistoricalCharts() {
  return (
    <Layout>
      <div className={styles.historicalContainer}>
        <h2>Historial de predicciones</h2>
        <div className={styles.chartsGrid}>
          {historicalData.map((data, index) => (
            <HistoricalChart key={index} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
