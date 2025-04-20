// pages/output.tsx

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

// Datos simulados para la tabla
const data = [
  { fecha: "2025-04-01", ventas: 120 },
  { fecha: "2025-04-02", ventas: 150 },
  { fecha: "2025-04-03", ventas: 170 },
  { fecha: "2025-04-04", ventas: 90 },
  { fecha: "2025-04-05", ventas: 200 },
];

// Definición de columnas para react-table
const columns: Column<{ fecha: string; ventas: number }>[] = [
  {
    Header: "Fecha",
    accessor: "fecha",
  },
  {
    Header: "Ventas",
    accessor: "ventas",
  },
];

// Datos para el gráfico
const chartData = {
  labels: data.map((d) => d.fecha),
  datasets: [
    {
      label: "Ventas",
      data: data.map((d) => d.ventas),
      fill: false,
      borderColor: "#008AFF",
      backgroundColor: "#90D5FF",
      tension: 0.1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Ventas Diarias",
    },
  },
};

const OutputPage = () => {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Layout>
      <div className={styles.outputContainer}>
        <div className={styles.tableContainer}>
          <table
            {...getTableProps()}
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      key={column.id}
                      style={{
                        borderBottom: "1px solid #ddd",
                        background: "#90D5FF",
                        color: "white",
                        padding: "0.5rem",
                        textAlign: "left",
                      }}
                    >
                      {column.render("Header")}
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
                      <td
                        {...cell.getCellProps()}
                        key={cell.column.id}
                        style={{
                          padding: "0.5rem",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
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
};

export default OutputPage;
