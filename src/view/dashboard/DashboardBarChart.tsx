
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: [
    `${i18n('dashboard.charts.day')} 1`,
    `${i18n('dashboard.charts.day')} 2`,
    `${i18n('dashboard.charts.day')} 3`,
    `${i18n('dashboard.charts.day')} 4`,
    `${i18n('dashboard.charts.day')} 5`,
  ],
  datasets: [
    {
      label: i18n('dashboard.charts.red'),
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 82],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: true,
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
};

export default function DashboardBarChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
