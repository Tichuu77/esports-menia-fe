 
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

// Register necessary Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      mode: 'index', // 'label' mode was removed, 'index' is closest equivalent
      intersect: false,
    },
    legend: {
      display: true,
      position: 'top',
    },
  },
  elements: {
    line: {
      fill: false,
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    'y-axis-1': {
      type: 'linear',
      display: false,
      position: 'left',
      grid: {
        display: false,
      },
    },
    'y-axis-2': {
      type: 'linear',
      display: false,
      position: 'right',
      grid: {
        display: false,
      },
    },
  },
};

const data1 = {
  labels: [
    i18n('dashboard.charts.months.1'),
    i18n('dashboard.charts.months.2'),
    i18n('dashboard.charts.months.3'),
    i18n('dashboard.charts.months.4'),
    i18n('dashboard.charts.months.5'),
    i18n('dashboard.charts.months.6'),
    i18n('dashboard.charts.months.7'),
  ],
  datasets: [
    {
      label: i18n('dashboard.charts.orange'),
      type: 'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2',
    },
    {
      type: 'bar',
      label: i18n('dashboard.charts.blue'),
      data: [200, 185, 590, 621, 250, 400, 95],
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      hoverBackgroundColor: '#36A2EB',
      hoverBorderColor: '#36A2EB',
      yAxisID: 'y-axis-1',
    },
  ],
};

export default function DashboardMixChartOne() {
  return (
            <div style={{ width: '100%', height: 300 }}>
            <Bar data={data1} options={options} />
            </div>
          );
}
