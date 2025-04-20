"use client";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";
import type { ChartData, ChartOptions } from "chart.js";

const Line = dynamic(() => import("react-chartjs-2").then((m) => m.Line), {
  ssr: false,
});

export default function Output() {
  const data: ChartData<"line"> = {
    labels: ["2024-01-01", "2024-02-01", "2024-03-01"],
    datasets: [{ label: "Ventas", data: [100, 120, 150], tension: 0.4 }],
  };
  const options: ChartOptions<"line"> = { responsive: true };

  return (
    <Layout>
      <h2>Output (Maqueta)</h2>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Ventas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-01-01</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2024-02-01</td>
            <td>120</td>
          </tr>
          <tr>
            <td>2024-03-01</td>
            <td>150</td>
          </tr>
        </tbody>
      </table>
      <Line data={data} options={options} />
    </Layout>
  );
}
