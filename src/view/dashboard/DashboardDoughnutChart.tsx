import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { i18n } from 'src/i18n';

// Register required components
Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    i18n('dashboard.charts.red'),
    i18n('dashboard.charts.blue'),
    i18n('dashboard.charts.yellow'),
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

export default function DashboardDoughnutChart() {
  
    return (
      <div style={{ width: '100%', height: 300 }}>
       <Doughnut data={data} />
      </div>
    );
}
