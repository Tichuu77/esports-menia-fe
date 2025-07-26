 
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Import the type only (no runtime import)
import type { ChartOptions } from 'chart.js';

import { i18n } from 'src/i18n';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: [
    i18n('dashboard.charts.months.1'),
    i18n('dashboard.charts.months.2'),
    i18n('dashboard.charts.months.3'),
    i18n('dashboard.charts.months.4'),
    i18n('dashboard.charts.months.5'),
    i18n('dashboard.charts.months.6'),
  ],
  datasets: [
    {
      label: i18n('dashboard.charts.red'),
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
  ],
};

const options: ChartOptions<'bar'> = {
  indexAxis: 'y', // horizontal bars
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Horizontal Bar Chart',
    },
  },
};

export default function DashboardHorizontalBarChart() {
    return (
        <div style={{ width: '100%', height: 300 }}>
         <Bar data={data} options={options} />
        </div>
      );
}
