"use client";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Output.module.css";
import { useTable, Column } from "react-table";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
);

const data = [
  { fecha: "2025-04-01", ventas: 120 },
  { fecha: "2025-04-02", ventas: 150 },
  { fecha: "2025-04-03", ventas: 170 },
  { fecha: "2025-04-04", ventas: 90 },
  { fecha: "2025-04-05", ventas: 200 },
];

const columns: Column<(typeof data)[0]>[] = [
  { Header: "Fecha", accessor: "fecha" },
  { Header: "Ventas", accessor: "ventas" },
];

const chartData = {
  labels: data.map((d) => d.fecha),
  datasets: [
    {
      label: "Ventas Diarias",
      data: data.map((d) => d.ventas),
      fill: true,
      borderColor: "var(--color-primary)",
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(0, 138, 255, 0.2)");
        gradient.addColorStop(1, "rgba(0, 138, 255, 0.01)");
        return gradient;
      },
      tension: 0.2,
      pointBackgroundColor: "white",
      pointBorderColor: "var(--color-primary)",
      pointBorderWidth: 1,
      pointRadius: 5,
      pointHoverRadius: 7,
    } as any,
  ],
};

const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "var(--color-text)",
        font: {
          size: 14,
          weight: 600,
        },
      },
    },
    title: {
      display: true,
      text: "Predicción de Ventas",
      color: "var(--color-primary)",
      font: {
        size: 18,
        weight: 700,
      },
    },
    tooltip: {
      backgroundColor: "var(--color-primary)",
      titleColor: "white",
      bodyColor: "white",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
      padding: 12,
    } as any,
  },
  scales: {
    x: {
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      ticks: {
        color: "var(--color-text)",
      },
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      ticks: {
        color: "var(--color-text)",
      },
    },
  },
};

export default function OutputPage() {
  const table = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <Layout>
      <div className={styles.outputContainer}>
        <div className={styles.tableContainer}>
          <table {...getTableProps()} className={styles.dataTable}>
            <thead>
              {headerGroups.map((hg) => (
                <tr {...hg.getHeaderGroupProps()} key={hg.id}>
                  {hg.headers.map((col) => (
                    <th {...col.getHeaderProps()} key={col.id}>
                      {col.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.id}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} key={cell.column.id}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={styles.chartContainer}>
          <h3 className={styles.chartTitle}>Tendencia Predictiva</h3>
          <div className={styles.chartWrapper}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
