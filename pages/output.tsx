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
      label: "Ventas",
      data: data.map((d) => d.ventas),
      fill: false,
      borderColor: "var(--color-primary)",
      backgroundColor: "var(--color-border)",
      tension: 0.1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Ventas Diarias" },
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
          <table {...getTableProps()}>
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
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </Layout>
  );
}
