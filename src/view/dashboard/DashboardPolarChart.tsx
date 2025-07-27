import { useEffect, useRef, useMemo } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { i18n } from 'src/i18n';

// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend, RadialLinearScale);

export default function DashboardPolarChart( ) {
  const chartRef = useRef(null);

  // Memoize data to prevent unnecessary re-renders
  const data = useMemo(
    () => ({
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
          ],
        },
      ],
      labels: [
        i18n('dashboard.charts.red'),
        i18n('dashboard.charts.green'),
        i18n('dashboard.charts.yellow'),
        i18n('dashboard.charts.grey'),
        i18n('dashboard.charts.blue'),
      ],
    }),
    [] // Empty dependency array assumes i18n values are static
  );

  // Define options to match DashboardRadarChart and control scale display
  const options = useMemo(
    () => ({
      scales: {
        r: {
          display: false, // Hides the radial scale, consistent with DashboardRadarChart
        },
      },
    }),
    []
  );

  // Cleanup chart instance on unmount to prevent canvas reuse errors
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()  ;
      }
    };
  }, []);

  return (
      <div style={{ width: '100%', height: 300 }}>
       <PolarArea ref={chartRef} data={data} options={options} id="polar-chart" />
      </div>
    );
}