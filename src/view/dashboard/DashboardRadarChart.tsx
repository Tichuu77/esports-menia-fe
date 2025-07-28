import { useEffect, useRef, useMemo } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale } from 'chart.js';
import { i18n } from 'src/i18n';

// Register the radialLinear scale
Chart.register(RadialLinearScale);

export default function DashboardRadarChart( ) {
  const chartRef = useRef(null);

  // Memoize data to prevent unnecessary re-renders
  const data = useMemo(
    () => ({
      labels: [
        i18n('dashboard.charts.eating'),
        i18n('dashboard.charts.drinking'),
        i18n('dashboard.charts.sleeping'),
        i18n('dashboard.charts.designing'),
        i18n('dashboard.charts.coding'),
        i18n('dashboard.charts.cycling'),
        i18n('dashboard.charts.running'),
      ],
      datasets: [
        {
          label: `${i18n('dashboard.charts.grey')}`,
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: `${i18n('dashboard.charts.red')}`,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    }),
    [] // Empty dependency array assumes i18n values are static
  );

  // Memoize options to prevent unnecessary re-renders
  const options = useMemo(
    () => ({
      scales: {
        r: {
          display: false, // Hides the scale, as per original intent
        },
      },
    }),
    []
  );

  // Cleanup chart instance on unmount to prevent canvas reuse errors
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

   return (
        <div style={{ width: '100%', height: 300 }}>
        <Radar ref={chartRef} data={data} options={options} id="radar-chart" />
        </div>
      );
}