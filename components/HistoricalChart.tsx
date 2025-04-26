import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

export default function HistoricalChart({ data }: { data: any }) {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: "Ventas",
        data: data.sales,
        borderColor: "var(--color-primary)",
        backgroundColor: "rgba(0, 138, 255, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "white",
        pointBorderColor: "var(--color-primary)",
        pointBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: data.title,
        color: "var(--color-primary)",
        font: {
          size: 16,
          weight: 600,
        },
      },
      legend: {
        labels: {
          color: "var(--color-text)",
        },
      },
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
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
