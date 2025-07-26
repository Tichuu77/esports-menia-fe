 
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

// Register Chart.js components you use
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const data = {
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
      label: i18n('dashboard.charts.green'),
      fill: false,  // 'fill' works the same here
      tension: 0.1,  // renamed from lineTension to tension
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  scales: {
    x: {  // renamed from xAxes
      display: false,
    },
    y: {  // renamed from yAxes
      display: true,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
};

export default function DashboardLineChart() {
   return (
          <div style={{ width: '100%', height: 300 }}>
           <Line data ={data} options={options} />
          </div>
        );
}
